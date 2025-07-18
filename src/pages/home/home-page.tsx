import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HouseModel } from "./components/house-model";

export const HomePage = () => {
  return (
    <div id="canvas-container" className="w-full h-screen relative">
      <Canvas>
        <HouseModel />

        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
};
