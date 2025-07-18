import { ModelRoom } from "@models/room";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Component to show coordinate axes
const AxesHelper = () => {
  return <axesHelper args={[5]} />;
};

// First-person camera component with movement
const FirstPersonCamera = () => {
  const { camera } = useThree();

  // Movement state
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const canJump = useRef(false);

  // Mouse/Touch state
  const isMouseDown = useRef(false);
  const isTouchActive = useRef(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const touchDistance = useRef(0);
  const lastTouchDistance = useRef(0);

  // Movement speed
  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const speed = 0.001;
  const mouseSensitivity = 0.002;
  const zoomSensitivity = 0.1;

  useEffect(() => {
    // Set initial camera position inside the house
    camera.position.set(0, 1.7, 0); // Eye level height
    camera.lookAt(0, 1.7, -1);

    // Cleanup cursor when component unmounts
    return () => {
      document.body.style.cursor = "default";
    };
  }, [camera]);

  // Handle keyboard and mouse input
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward.current = true;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward.current = true;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft.current = true;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight.current = true;
          break;
        case "Space":
          if (canJump.current) velocity.y += 350;
          canJump.current = false;
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward.current = false;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward.current = false;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft.current = false;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight.current = false;
          break;
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      isMouseDown.current = true;
      lastMousePosition.current = { x: event.clientX, y: event.clientY };
      document.body.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
      document.body.style.cursor = "default";
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isMouseDown.current) return;

      const deltaX = event.clientX - lastMousePosition.current.x;
      const deltaY = event.clientY - lastMousePosition.current.y;

      const euler = new THREE.Euler().setFromQuaternion(
        camera.quaternion,
        "YXZ"
      );

      // Yaw - quay trái/phải
      euler.y += deltaX * mouseSensitivity;

      // Pitch - ngước lên/ngước xuống (đã đảo dấu deltaY cho đúng)
      euler.x += deltaY * mouseSensitivity;

      // Clamp pitch để không bị xoay lật
      const pitchLimit = Math.PI / 2 - 0.1;
      euler.x = THREE.MathUtils.clamp(euler.x, -pitchLimit, pitchLimit);

      // Cập nhật lại quaternion của camera
      camera.quaternion.setFromEuler(euler);

      lastMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    // Touch events for mobile
    const onTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      isTouchActive.current = true;

      if (event.touches.length === 1) {
        // Single touch for rotation
        const touch = event.touches[0];
        lastMousePosition.current = { x: touch.clientX, y: touch.clientY };
      } else if (event.touches.length === 2) {
        // Two touches for zoom
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const distance = Math.sqrt(
          Math.pow(touch1.clientX - touch2.clientX, 2) +
            Math.pow(touch1.clientY - touch2.clientY, 2)
        );
        lastTouchDistance.current = distance;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault();

      if (event.touches.length === 1) {
        // Single touch rotation
        const touch = event.touches[0];
        const deltaX = touch.clientX - lastMousePosition.current.x;
        const deltaY = touch.clientY - lastMousePosition.current.y;

        const euler = new THREE.Euler().setFromQuaternion(
          camera.quaternion,
          "YXZ"
        );

        // Yaw - quay trái/phải
        euler.y += deltaX * mouseSensitivity;

        // Pitch - ngước lên/ngước xuống
        euler.x += deltaY * mouseSensitivity;

        // Clamp pitch để không bị xoay lật
        const pitchLimit = Math.PI / 2 - 0.1;
        euler.x = THREE.MathUtils.clamp(euler.x, -pitchLimit, pitchLimit);

        // Cập nhật lại quaternion của camera
        camera.quaternion.setFromEuler(euler);

        lastMousePosition.current = { x: touch.clientX, y: touch.clientY };
      } else if (event.touches.length === 2) {
        // Two touch zoom
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const distance = Math.sqrt(
          Math.pow(touch1.clientX - touch2.clientX, 2) +
            Math.pow(touch1.clientY - touch2.clientY, 2)
        );

        const deltaDistance = distance - lastTouchDistance.current;
        const zoomDirection = new THREE.Vector3(0, 0, -1);
        zoomDirection.applyQuaternion(camera.quaternion);

        const zoomAmount = deltaDistance * zoomSensitivity * 0.01;
        camera.position.add(zoomDirection.multiplyScalar(zoomAmount));

        // Limit zoom distance
        const minDistance = 0.5;
        const maxDistance = 20;
        const cameraDistance = camera.position.length();

        if (cameraDistance < minDistance) {
          camera.position.normalize().multiplyScalar(minDistance);
        } else if (cameraDistance > maxDistance) {
          camera.position.normalize().multiplyScalar(maxDistance);
        }

        lastTouchDistance.current = distance;
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      event.preventDefault();
      isTouchActive.current = false;
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onTouchStart, { passive: false });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [camera, mouseSensitivity]);

  // Update movement each frame
  useFrame(() => {
    const time = Date.now() * 0.0001;

    velocity.x -= velocity.x * 30.0 * speed;
    velocity.z -= velocity.z * 30.0 * speed;

    direction.z = Number(moveForward.current) - Number(moveBackward.current);
    direction.x = Number(moveRight.current) - Number(moveLeft.current);
    direction.normalize();

    if (moveForward.current || moveBackward.current)
      velocity.z -= direction.z * 400.0 * speed;
    if (moveLeft.current || moveRight.current)
      velocity.x -= direction.x * 400.0 * speed;

    // Move camera in the direction it's facing
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3(1, 0, 0);
    right.applyQuaternion(camera.quaternion);
    right.y = 0;
    right.normalize();

    camera.position.add(forward.multiplyScalar(-velocity.z * speed));
    camera.position.add(right.multiplyScalar(-velocity.x * speed));

    camera.position.y += velocity.y * speed;

    if (camera.position.y < 1.7) {
      velocity.y = 0;
      camera.position.y = 1.7;
      canJump.current = true;
    }
  });

  return null; // No controls component needed, using custom mouse controls
};

// Alternative method using ref to get model dimensions
const useModelDimensionsWithRef = () => {
  const modelRef = useRef<THREE.Group>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    depth: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [hasCalculated, setHasCalculated] = useState(false);

  useFrame(() => {
    if (modelRef.current && !hasCalculated) {
      // Compute bounding box of the rendered model
      const boundingBox = new THREE.Box3().setFromObject(modelRef.current);

      const width = boundingBox.max.x - boundingBox.min.x;
      const height = boundingBox.max.y - boundingBox.min.y;
      const depth = boundingBox.max.z - boundingBox.min.z;

      if (width > 0 && height > 0 && depth > 0) {
        setDimensions({ width, height, depth });

        // Calculate position to center model and place floor at ground level
        const centerX = -(boundingBox.max.x + boundingBox.min.x) / 2;
        const centerZ = -(boundingBox.max.z + boundingBox.min.z) / 2;
        const floorY = -boundingBox.min.y; // Place floor at y=0

        setPosition({ x: centerX, y: floorY, z: centerZ });
        setHasCalculated(true);

        console.log("Model dimensions (from ref):", { width, height, depth });
        console.log("Model position:", { x: centerX, y: floorY, z: centerZ });
      }
    }
  });

  return { modelRef, dimensions, position };
};

export const HouseModel = () => {
  const { modelRef, dimensions, position } = useModelDimensionsWithRef();
  console.log(dimensions);
  console.log("Using position:", position);
  return (
    <>
      <ModelRoom
        ref={modelRef}
        scale={0.01}
        position={[position.x, position.y, position.z]}
      />
      <FirstPersonCamera />

      {/* Add some lighting inside the house */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 3, 0]} intensity={0.8} />
      <pointLight position={[5, 3, 5]} intensity={0.5} />
      <pointLight position={[-5, 3, -5]} intensity={0.5} />

      {/* Show coordinate axes */}
      <AxesHelper />
    </>
  );
};
