import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HouseModel } from "./components/house-model";
import { useState, useEffect } from "react";

// Instructions overlay component
const Instructions = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handlePointerLockChange = () => {
      setIsLocked(document.pointerLockElement !== null);
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);
    return () =>
      document.removeEventListener(
        "pointerlockchange",
        handlePointerLockChange
      );
  }, []);

  if (isLocked) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg text-center pointer-events-auto">
        <h2 className="text-xl font-bold mb-4">3D House Tour</h2>
        <p className="mb-2">Click to enter first-person view</p>
        <p className="text-sm text-gray-300">Use mouse to look around</p>
        <p className="text-sm text-gray-300">WASD or Arrow keys to move</p>
        <p className="text-sm text-gray-300">ESC to exit</p>
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div id="canvas-container" className="w-full h-screen relative">
      <Canvas>
        <HouseModel />

        <Environment preset="apartment" />
      </Canvas>

      {/* Instructions overlay */}
      <Instructions />
    </div>
  );
};
