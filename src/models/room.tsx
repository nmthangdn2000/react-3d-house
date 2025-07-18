import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { JSX, forwardRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Mesh1_img1_0_0: THREE.Mesh;
    Mesh2_img1_1_0: THREE.Mesh;
    Mesh3_img1_2_0: THREE.Mesh;
    Mesh4_img1_3_0: THREE.Mesh;
    Mesh5_Color_4_0: THREE.Mesh;
    Mesh6_img1_5_0: THREE.Mesh;
    Mesh7_img1_6_0: THREE.Mesh;
    Mesh8_img1_7_0: THREE.Mesh;
    Mesh9_img3_8_0: THREE.Mesh;
    Mesh10_img3_9_0: THREE.Mesh;
    Mesh11_img1_10_0: THREE.Mesh;
    Mesh12_img1_11_0: THREE.Mesh;
    Mesh13_img1_12_0: THREE.Mesh;
    Mesh14_img1_13_0: THREE.Mesh;
    Mesh15_img1_14_0: THREE.Mesh;
    Mesh16_img1_15_0: THREE.Mesh;
    Mesh17_img1_16_0: THREE.Mesh;
    Mesh18_img1_17_0: THREE.Mesh;
    Mesh19_Color_18_0: THREE.Mesh;
    Mesh19_Color_19_0: THREE.Mesh;
    Mesh19_img9_20_0: THREE.Mesh;
    Mesh19_img8_21_0: THREE.Mesh;
    Mesh19_Color_22_0: THREE.Mesh;
    Mesh20_Color_23_0: THREE.Mesh;
    Mesh20_Color_24_0: THREE.Mesh;
    Mesh20_img8_21_0: THREE.Mesh;
    Mesh20_Color_19_0: THREE.Mesh;
    Mesh21_Color_23_0: THREE.Mesh;
    Mesh21_img8_21_0: THREE.Mesh;
    Mesh21_img10_25_0: THREE.Mesh;
    Mesh21_Color_26_0: THREE.Mesh;
    Mesh21_Color_27_0: THREE.Mesh;
    Mesh22_Color_23_0: THREE.Mesh;
    Mesh23_Color_23_0: THREE.Mesh;
    Mesh24_Color_23_0: THREE.Mesh;
    Mesh24_img8_21_0: THREE.Mesh;
    Mesh24_img10_25_0: THREE.Mesh;
    Mesh24_Color_27_0: THREE.Mesh;
    Mesh25_Color_23_0: THREE.Mesh;
    Mesh26_Color_23_0: THREE.Mesh;
    Mesh26_img8_21_0: THREE.Mesh;
    Mesh26_img10_25_0: THREE.Mesh;
    Mesh26_Color_27_0: THREE.Mesh;
    Mesh27_Color_23_0: THREE.Mesh;
    Mesh28_Color_23_0: THREE.Mesh;
    Mesh28_img8_21_0: THREE.Mesh;
    Mesh28_img10_25_0: THREE.Mesh;
    Mesh28_Color_27_0: THREE.Mesh;
    Mesh29_Color_23_0: THREE.Mesh;
    Mesh30_Color_23_0: THREE.Mesh;
    Mesh30_img8_21_0: THREE.Mesh;
    Mesh30_img10_25_0: THREE.Mesh;
    Mesh30_Color_26_0: THREE.Mesh;
    Mesh30_Color_27_0: THREE.Mesh;
    Mesh31_Color_23_0: THREE.Mesh;
    Mesh32_Color_4_0: THREE.Mesh;
    Mesh32_img7_30_0: THREE.Mesh;
    Mesh32_img7_30_1_0: THREE.Mesh;
    Mesh32_img5_31_0: THREE.Mesh;
    Mesh32_img5_31_1_0: THREE.Mesh;
    Mesh32_img6_32_0: THREE.Mesh;
    Mesh33_Color_4_0: THREE.Mesh;
    Mesh33_img7_30_0: THREE.Mesh;
    Mesh33_img7_30_1_0: THREE.Mesh;
    Mesh33_img5_31_0: THREE.Mesh;
    Mesh33_img5_31_1_0: THREE.Mesh;
    Mesh33_img6_32_0: THREE.Mesh;
    Mesh33_Color_33_0: THREE.Mesh;
    Mesh33_Color_34_0: THREE.Mesh;
    Mesh34_Color_23_0: THREE.Mesh;
    Mesh34_Color_24_0: THREE.Mesh;
    Mesh34_img8_21_0: THREE.Mesh;
    Mesh34_Color_19_0: THREE.Mesh;
    Mesh35_Color_35_0: THREE.Mesh;
    Mesh35_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh35_Color_37_0: THREE.Mesh;
    Mesh35_Color_19_0: THREE.Mesh;
    Mesh35_Color_38_0: THREE.Mesh;
    Mesh36_Color_39_0: THREE.Mesh;
    Mesh36_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh37_Color_35_0: THREE.Mesh;
    Mesh37_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh37_Color_37_0: THREE.Mesh;
    Mesh37_Color_42_0: THREE.Mesh;
    Mesh37_Color_43_0: THREE.Mesh;
    Mesh37_Color_44_0: THREE.Mesh;
    Mesh37_Color_38_0: THREE.Mesh;
    Mesh38_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh38_Color_45_0: THREE.Mesh;
    Mesh38_Color_18_0: THREE.Mesh;
    Mesh38_Color_35_0: THREE.Mesh;
    Mesh38_Color_19_0: THREE.Mesh;
    Mesh38_Color_38_0: THREE.Mesh;
    Mesh39_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh39_Color_27_0: THREE.Mesh;
    Mesh39_Color_35_0: THREE.Mesh;
    Mesh39_Color_19_0: THREE.Mesh;
    Mesh39_Color_38_0: THREE.Mesh;
    Mesh40_Color_39_0: THREE.Mesh;
    Mesh40_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh41_Color_35_0: THREE.Mesh;
    Mesh41_Color_19_0: THREE.Mesh;
    Mesh41_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh41_Color_37_0: THREE.Mesh;
    Mesh41_Color_38_0: THREE.Mesh;
    Mesh41_Color_48_0: THREE.Mesh;
    Mesh41_Color_27_0: THREE.Mesh;
    Mesh41_Color_49_0: THREE.Mesh;
    Mesh41_Color_50_0: THREE.Mesh;
    Mesh41_pushed_1750785210_img17_51_0: THREE.Mesh;
    Mesh41_pushed_1750785210_img18_52_0: THREE.Mesh;
    Mesh42_Color_35_0: THREE.Mesh;
    Mesh42_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh42_Color_37_0: THREE.Mesh;
    Mesh42_Color_53_0: THREE.Mesh;
    Mesh43_pushed_1750785210_img11_54_0: THREE.Mesh;
    Mesh44_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh44_Color_45_0: THREE.Mesh;
    Mesh44_Color_18_0: THREE.Mesh;
    Mesh44_Color_55_0: THREE.Mesh;
    Mesh44_Color_35_0: THREE.Mesh;
    Mesh44_Color_19_0: THREE.Mesh;
    Mesh44_Color_38_0: THREE.Mesh;
    Mesh45_Color_35_0: THREE.Mesh;
    Mesh45_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh45_Color_37_0: THREE.Mesh;
    Mesh45_Color_53_0: THREE.Mesh;
    Mesh46_Color_35_0: THREE.Mesh;
    Mesh46_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh46_Color_37_0: THREE.Mesh;
    Mesh46_Color_53_0: THREE.Mesh;
    Mesh46_Color_53_0_1: THREE.Mesh;
    Mesh46_Color_53_0_2: THREE.Mesh;
    Mesh47_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh47_Color_45_0: THREE.Mesh;
    Mesh47_Color_35_0: THREE.Mesh;
    Mesh47_Color_19_0: THREE.Mesh;
    Mesh47_Color_38_0: THREE.Mesh;
    Mesh48_Color_19_0: THREE.Mesh;
    Mesh48_pushed_1750785210_img14_57_0: THREE.Mesh;
    Mesh49_Color_19_0: THREE.Mesh;
    Mesh49_pushed_1750785210_img14_57_0: THREE.Mesh;
    Mesh50_Color_19_0: THREE.Mesh;
    Mesh50_pushed_1750785210_img14_57_0: THREE.Mesh;
    Mesh51_pushed_1750785210_img14_57_0: THREE.Mesh;
    Mesh52_Color_35_0: THREE.Mesh;
    Mesh52_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh52_Color_37_0: THREE.Mesh;
    Mesh52_Color_19_0: THREE.Mesh;
    Mesh52_Color_38_0: THREE.Mesh;
    Mesh53_Color_19_0: THREE.Mesh;
    Mesh53_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh54_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh54_Color_27_0: THREE.Mesh;
    Mesh54_Color_35_0: THREE.Mesh;
    Mesh54_Color_19_0: THREE.Mesh;
    Mesh54_Color_38_0: THREE.Mesh;
    Mesh55_pushed_1750785210_img14_57_0: THREE.Mesh;
    Mesh56_Color_59_0: THREE.Mesh;
    Mesh57_Color_59_0: THREE.Mesh;
    Mesh58_Color_59_0: THREE.Mesh;
    Mesh59_Color_59_0: THREE.Mesh;
    Mesh60_Color_59_0: THREE.Mesh;
    Mesh61_Color_59_0: THREE.Mesh;
    Mesh62_Color_59_0: THREE.Mesh;
    Mesh63_pushed_1750785210_img5_60_0: THREE.Mesh;
    Mesh64_Color_61_0: THREE.Mesh;
    Mesh65_Color_39_0: THREE.Mesh;
    Mesh65_pushed_1750785210_img8_36_0: THREE.Mesh;
    Mesh65_pushed_1750785210_img15_62_0: THREE.Mesh;
    Mesh65_Color_63_0: THREE.Mesh;
    Mesh65_Color_64_0: THREE.Mesh;
    Mesh65_Color_65_0: THREE.Mesh;
    Mesh65_pushed_1750785210_img16_66_0: THREE.Mesh;
    Mesh66_Color_39_0: THREE.Mesh;
    Mesh67_Color_39_0: THREE.Mesh;
    Mesh68_Color_39_0: THREE.Mesh;
    Mesh69_Color_39_0: THREE.Mesh;
    Mesh70_Color_39_0: THREE.Mesh;
    Mesh71_Color_39_0: THREE.Mesh;
    Mesh72_Color_4_0: THREE.Mesh;
    Mesh72_pushed_1750785274_img13_67_0: THREE.Mesh;
    Mesh72_pushed_1750785274_img13_67_1_0: THREE.Mesh;
    Mesh72_pushed_1750785274_img11_68_0: THREE.Mesh;
    Mesh72_pushed_1750785274_img11_68_1_0: THREE.Mesh;
    Mesh72_pushed_1750785274_img12_69_0: THREE.Mesh;
    Mesh73_Color_4_0: THREE.Mesh;
    Mesh73_pushed_1750785274_img13_67_0: THREE.Mesh;
    Mesh73_pushed_1750785274_img13_67_1_0: THREE.Mesh;
    Mesh73_pushed_1750785274_img11_68_0: THREE.Mesh;
    Mesh73_pushed_1750785274_img11_68_1_0: THREE.Mesh;
    Mesh73_pushed_1750785274_img12_69_0: THREE.Mesh;
    Mesh74_pushed_1750785274_img14_70_0: THREE.Mesh;
    Mesh74_Color_71_0: THREE.Mesh;
    Mesh75_Color_72_0: THREE.Mesh;
    Mesh75_pushed_1750785274_img5_73_0: THREE.Mesh;
    Mesh75_pushed_1750785274_img14_70_0: THREE.Mesh;
    Mesh75_pushed_1750785274_img15_74_0: THREE.Mesh;
    Mesh75_Color_75_0: THREE.Mesh;
    Mesh75_Color_38_0: THREE.Mesh;
    Mesh76_pushed_1750785274_img15_74_0: THREE.Mesh;
    Mesh76_Color_39_0: THREE.Mesh;
    Mesh76_Color_75_0: THREE.Mesh;
    Mesh76_Color_76_0: THREE.Mesh;
    Mesh77_pushed_1750785274_img15_74_0: THREE.Mesh;
    Mesh77_Color_39_0: THREE.Mesh;
    Mesh77_Color_75_0: THREE.Mesh;
    Mesh78_pushed_1750785274_img14_70_0: THREE.Mesh;
    Mesh78_Color_39_0: THREE.Mesh;
    Mesh78_Color_75_0: THREE.Mesh;
    Mesh79_Color_77_0: THREE.Mesh;
    Mesh79_pushed_1750785274_img6_78_0: THREE.Mesh;
    Mesh80_Color_77_0: THREE.Mesh;
    Mesh80_pushed_1750785274_img7_79_0: THREE.Mesh;
    Mesh80_pushed_1750785274_img8_80_0: THREE.Mesh;
    Mesh81_Color_77_0: THREE.Mesh;
    Mesh81_pushed_1750785274_img7_79_0: THREE.Mesh;
    Mesh81_pushed_1750785274_img8_80_0: THREE.Mesh;
    Mesh82_Color_77_0: THREE.Mesh;
    Mesh82_pushed_1750785274_img7_79_0: THREE.Mesh;
    Mesh82_pushed_1750785274_img8_80_0: THREE.Mesh;
    Mesh83_Color_77_0: THREE.Mesh;
    Mesh83_pushed_1750785274_img9_81_0: THREE.Mesh;
    Mesh84_Color_4_0: THREE.Mesh;
    Mesh84_pushed_1750785274_img10_82_0: THREE.Mesh;
    Mesh84_Color_33_0: THREE.Mesh;
    Mesh84_Color_34_0: THREE.Mesh;
    Mesh85_Color_4_0: THREE.Mesh;
    Mesh85_pushed_1750785274_img13_67_0: THREE.Mesh;
    Mesh85_pushed_1750785274_img13_67_1_0: THREE.Mesh;
    Mesh85_pushed_1750785274_img11_68_0: THREE.Mesh;
    Mesh85_pushed_1750785274_img11_68_1_0: THREE.Mesh;
    Mesh85_pushed_1750785274_img12_69_0: THREE.Mesh;
    Mesh85_Color_33_0: THREE.Mesh;
    Mesh85_Color_34_0: THREE.Mesh;
    Mesh86_Color_4_0: THREE.Mesh;
    Mesh86_pushed_1750785274_img10_82_0: THREE.Mesh;
    Mesh86_Color_33_0: THREE.Mesh;
    Mesh86_Color_34_0: THREE.Mesh;
    Mesh87_Color_4_0: THREE.Mesh;
    Mesh87_Color_53_0: THREE.Mesh;
    Mesh88_pushed_1750785274_img14_70_0: THREE.Mesh;
    Mesh89_pushed_1750785337_img6_83_0: THREE.Mesh;
    Mesh89_pushed_1750785337_img5_84_0: THREE.Mesh;
    Mesh89_Color_24_0: THREE.Mesh;
    Mesh89_Color_27_0: THREE.Mesh;
    Mesh90_pushed_1750785337_img6_83_0: THREE.Mesh;
    Mesh91_Color_24_0: THREE.Mesh;
    Mesh92_pushed_1750785337_img6_83_0: THREE.Mesh;
    Mesh92_pushed_1750785337_img5_84_0: THREE.Mesh;
    Mesh92_Color_24_0: THREE.Mesh;
    Mesh92_Color_27_0: THREE.Mesh;
    Mesh93_Color_24_0: THREE.Mesh;
    Mesh94_pushed_1750785337_img6_83_0: THREE.Mesh;
    Mesh94_pushed_1750785337_img5_84_0: THREE.Mesh;
    Mesh94_Color_24_0: THREE.Mesh;
    Mesh94_Color_27_0: THREE.Mesh;
    Mesh95_Color_24_0: THREE.Mesh;
    Mesh96_pushed_1750785337_img6_83_0: THREE.Mesh;
    Mesh96_pushed_1750785337_img5_84_0: THREE.Mesh;
    Mesh96_Color_24_0: THREE.Mesh;
    Mesh97_pushed_1750785337_img6_83_0: THREE.Mesh;
  };
  materials: {
    img1_0: THREE.MeshStandardMaterial;
    img1_1: THREE.MeshStandardMaterial;
    img1_2: THREE.MeshStandardMaterial;
    img1_3: THREE.MeshStandardMaterial;
    Color_4: THREE.MeshStandardMaterial;
    img1_5: THREE.MeshStandardMaterial;
    img1_6: THREE.MeshStandardMaterial;
    img1_7: THREE.MeshStandardMaterial;
    img3_8: THREE.MeshStandardMaterial;
    img3_9: THREE.MeshStandardMaterial;
    img1_10: THREE.MeshStandardMaterial;
    img1_11: THREE.MeshStandardMaterial;
    img1_12: THREE.MeshStandardMaterial;
    img1_13: THREE.MeshStandardMaterial;
    img1_14: THREE.MeshStandardMaterial;
    img1_15: THREE.MeshStandardMaterial;
    img1_16: THREE.MeshStandardMaterial;
    img1_17: THREE.MeshStandardMaterial;
    Color_18: THREE.MeshStandardMaterial;
    Color_19: THREE.MeshStandardMaterial;
    img9_20: THREE.MeshStandardMaterial;
    img8_21: THREE.MeshStandardMaterial;
    Color_22: THREE.MeshStandardMaterial;
    Color_23: THREE.MeshStandardMaterial;
    Color_24: THREE.MeshStandardMaterial;
    img10_25: THREE.MeshStandardMaterial;
    Color_26: THREE.MeshStandardMaterial;
    Color_27: THREE.MeshStandardMaterial;
    img7_30: THREE.MeshStandardMaterial;
    img7_30_1: THREE.MeshStandardMaterial;
    img5_31: THREE.MeshStandardMaterial;
    img5_31_1: THREE.MeshStandardMaterial;
    img6_32: THREE.MeshStandardMaterial;
    Color_33: THREE.MeshStandardMaterial;
    Color_34: THREE.MeshStandardMaterial;
    Color_35: THREE.MeshStandardMaterial;
    pushed_1750785210_img8_36: THREE.MeshStandardMaterial;
    Color_37: THREE.MeshStandardMaterial;
    Color_38: THREE.MeshStandardMaterial;
    Color_39: THREE.MeshStandardMaterial;
    Color_42: THREE.MeshStandardMaterial;
    Color_43: THREE.MeshStandardMaterial;
    Color_44: THREE.MeshStandardMaterial;
    Color_45: THREE.MeshStandardMaterial;
    Color_48: THREE.MeshStandardMaterial;
    Color_49: THREE.MeshStandardMaterial;
    Color_50: THREE.MeshStandardMaterial;
    pushed_1750785210_img17_51: THREE.MeshStandardMaterial;
    pushed_1750785210_img18_52: THREE.MeshStandardMaterial;
    Color_53: THREE.MeshStandardMaterial;
    pushed_1750785210_img11_54: THREE.MeshStandardMaterial;
    Color_55: THREE.MeshStandardMaterial;
    pushed_1750785210_img14_57: THREE.MeshStandardMaterial;
    Color_59: THREE.MeshStandardMaterial;
    pushed_1750785210_img5_60: THREE.MeshStandardMaterial;
    Color_61: THREE.MeshStandardMaterial;
    pushed_1750785210_img15_62: THREE.MeshStandardMaterial;
    Color_63: THREE.MeshStandardMaterial;
    Color_64: THREE.MeshStandardMaterial;
    Color_65: THREE.MeshStandardMaterial;
    pushed_1750785210_img16_66: THREE.MeshStandardMaterial;
    pushed_1750785274_img13_67: THREE.MeshStandardMaterial;
    pushed_1750785274_img13_67_1: THREE.MeshStandardMaterial;
    pushed_1750785274_img11_68: THREE.MeshStandardMaterial;
    pushed_1750785274_img11_68_1: THREE.MeshStandardMaterial;
    pushed_1750785274_img12_69: THREE.MeshStandardMaterial;
    pushed_1750785274_img14_70: THREE.MeshStandardMaterial;
    Color_71: THREE.MeshStandardMaterial;
    Color_72: THREE.MeshStandardMaterial;
    pushed_1750785274_img5_73: THREE.MeshStandardMaterial;
    pushed_1750785274_img15_74: THREE.MeshStandardMaterial;
    Color_75: THREE.MeshStandardMaterial;
    Color_76: THREE.MeshStandardMaterial;
    Color_77: THREE.MeshStandardMaterial;
    pushed_1750785274_img6_78: THREE.MeshStandardMaterial;
    pushed_1750785274_img7_79: THREE.MeshStandardMaterial;
    pushed_1750785274_img8_80: THREE.MeshStandardMaterial;
    pushed_1750785274_img9_81: THREE.MeshStandardMaterial;
    pushed_1750785274_img10_82: THREE.MeshStandardMaterial;
    pushed_1750785337_img6_83: THREE.MeshStandardMaterial;
    pushed_1750785337_img5_84: THREE.MeshStandardMaterial;
  };
  animations: any[];
};

export const ModelRoom = forwardRef<
  THREE.Group,
  JSX.IntrinsicElements["group"]
>((props, ref) => {
  const { nodes, materials } = useGLTF(
    "/model/scene.gltf"
  ) as unknown as GLTFResult;
  return (
    <group {...props} ref={ref} dispose={null}>
      <group scale={0.1}>
        <mesh
          geometry={nodes.Mesh1_img1_0_0.geometry}
          material={materials.img1_0}
        />
        <mesh
          geometry={nodes.Mesh2_img1_1_0.geometry}
          material={materials.img1_1}
        />
        <mesh
          geometry={nodes.Mesh3_img1_2_0.geometry}
          material={materials.img1_2}
        />
        <mesh
          geometry={nodes.Mesh4_img1_3_0.geometry}
          material={materials.img1_3}
        />
        <mesh
          geometry={nodes.Mesh5_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh6_img1_5_0.geometry}
          material={materials.img1_5}
        />
        <mesh
          geometry={nodes.Mesh7_img1_6_0.geometry}
          material={materials.img1_6}
        />
        <mesh
          geometry={nodes.Mesh8_img1_7_0.geometry}
          material={materials.img1_7}
        />
        <mesh
          geometry={nodes.Mesh9_img3_8_0.geometry}
          material={materials.img3_8}
        />
        <mesh
          geometry={nodes.Mesh10_img3_9_0.geometry}
          material={materials.img3_9}
        />
        <mesh
          geometry={nodes.Mesh11_img1_10_0.geometry}
          material={materials.img1_10}
        />
        <mesh
          geometry={nodes.Mesh12_img1_11_0.geometry}
          material={materials.img1_11}
        />
        <mesh
          geometry={nodes.Mesh13_img1_12_0.geometry}
          material={materials.img1_12}
        />
        <mesh
          geometry={nodes.Mesh14_img1_13_0.geometry}
          material={materials.img1_13}
        />
        <mesh
          geometry={nodes.Mesh15_img1_14_0.geometry}
          material={materials.img1_14}
        />
        <mesh
          geometry={nodes.Mesh16_img1_15_0.geometry}
          material={materials.img1_15}
        />
        <mesh
          geometry={nodes.Mesh17_img1_16_0.geometry}
          material={materials.img1_16}
        />
        <mesh
          geometry={nodes.Mesh18_img1_17_0.geometry}
          material={materials.img1_17}
        />
        <mesh
          geometry={nodes.Mesh19_Color_18_0.geometry}
          material={materials.Color_18}
        />
        <mesh
          geometry={nodes.Mesh19_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh19_img9_20_0.geometry}
          material={materials.img9_20}
        />
        <mesh
          geometry={nodes.Mesh19_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh19_Color_22_0.geometry}
          material={materials.Color_22}
        />
        <mesh
          geometry={nodes.Mesh20_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh20_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh20_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh20_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh21_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh21_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh21_img10_25_0.geometry}
          material={materials.img10_25}
        />
        <mesh
          geometry={nodes.Mesh21_Color_26_0.geometry}
          material={materials.Color_26}
        />
        <mesh
          geometry={nodes.Mesh21_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh22_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh23_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh24_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh24_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh24_img10_25_0.geometry}
          material={materials.img10_25}
        />
        <mesh
          geometry={nodes.Mesh24_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh25_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh26_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh26_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh26_img10_25_0.geometry}
          material={materials.img10_25}
        />
        <mesh
          geometry={nodes.Mesh26_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh27_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh28_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh28_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh28_img10_25_0.geometry}
          material={materials.img10_25}
        />
        <mesh
          geometry={nodes.Mesh28_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh29_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh30_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh30_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh30_img10_25_0.geometry}
          material={materials.img10_25}
        />
        <mesh
          geometry={nodes.Mesh30_Color_26_0.geometry}
          material={materials.Color_26}
        />
        <mesh
          geometry={nodes.Mesh30_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh31_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh32_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh32_img7_30_0.geometry}
          material={materials.img7_30}
        />
        <mesh
          geometry={nodes.Mesh32_img7_30_1_0.geometry}
          material={materials.img7_30_1}
        />
        <mesh
          geometry={nodes.Mesh32_img5_31_0.geometry}
          material={materials.img5_31}
        />
        <mesh
          geometry={nodes.Mesh32_img5_31_1_0.geometry}
          material={materials.img5_31_1}
        />
        <mesh
          geometry={nodes.Mesh32_img6_32_0.geometry}
          material={materials.img6_32}
        />
        <mesh
          geometry={nodes.Mesh33_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh33_img7_30_0.geometry}
          material={materials.img7_30}
        />
        <mesh
          geometry={nodes.Mesh33_img7_30_1_0.geometry}
          material={materials.img7_30_1}
        />
        <mesh
          geometry={nodes.Mesh33_img5_31_0.geometry}
          material={materials.img5_31}
        />
        <mesh
          geometry={nodes.Mesh33_img5_31_1_0.geometry}
          material={materials.img5_31_1}
        />
        <mesh
          geometry={nodes.Mesh33_img6_32_0.geometry}
          material={materials.img6_32}
        />
        <mesh
          geometry={nodes.Mesh33_Color_33_0.geometry}
          material={materials.Color_33}
        />
        <mesh
          geometry={nodes.Mesh33_Color_34_0.geometry}
          material={materials.Color_34}
        />
        <mesh
          geometry={nodes.Mesh34_Color_23_0.geometry}
          material={materials.Color_23}
        />
        <mesh
          geometry={nodes.Mesh34_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh34_img8_21_0.geometry}
          material={materials.img8_21}
        />
        <mesh
          geometry={nodes.Mesh34_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh35_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh35_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh35_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh35_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh35_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh36_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh36_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh37_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh37_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh37_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh37_Color_42_0.geometry}
          material={materials.Color_42}
        />
        <mesh
          geometry={nodes.Mesh37_Color_43_0.geometry}
          material={materials.Color_43}
        />
        <mesh
          geometry={nodes.Mesh37_Color_44_0.geometry}
          material={materials.Color_44}
        />
        <mesh
          geometry={nodes.Mesh37_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh38_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh38_Color_45_0.geometry}
          material={materials.Color_45}
        />
        <mesh
          geometry={nodes.Mesh38_Color_18_0.geometry}
          material={materials.Color_18}
        />
        <mesh
          geometry={nodes.Mesh38_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh38_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh38_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh39_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh39_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh39_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh39_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh39_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh40_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh40_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh41_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh41_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh41_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh41_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh41_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh41_Color_48_0.geometry}
          material={materials.Color_48}
        />
        <mesh
          geometry={nodes.Mesh41_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh41_Color_49_0.geometry}
          material={materials.Color_49}
        />
        <mesh
          geometry={nodes.Mesh41_Color_50_0.geometry}
          material={materials.Color_50}
        />
        <mesh
          geometry={nodes.Mesh41_pushed_1750785210_img17_51_0.geometry}
          material={materials.pushed_1750785210_img17_51}
        />
        <mesh
          geometry={nodes.Mesh41_pushed_1750785210_img18_52_0.geometry}
          material={materials.pushed_1750785210_img18_52}
        />
        <mesh
          geometry={nodes.Mesh42_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh42_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh42_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh42_Color_53_0.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh43_pushed_1750785210_img11_54_0.geometry}
          material={materials.pushed_1750785210_img11_54}
        />
        <mesh
          geometry={nodes.Mesh44_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh44_Color_45_0.geometry}
          material={materials.Color_45}
        />
        <mesh
          geometry={nodes.Mesh44_Color_18_0.geometry}
          material={materials.Color_18}
        />
        <mesh
          geometry={nodes.Mesh44_Color_55_0.geometry}
          material={materials.Color_55}
        />
        <mesh
          geometry={nodes.Mesh44_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh44_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh44_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh45_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh45_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh45_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh45_Color_53_0.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh46_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh46_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh46_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh46_Color_53_0.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh46_Color_53_0_1.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh46_Color_53_0_2.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh47_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh47_Color_45_0.geometry}
          material={materials.Color_45}
        />
        <mesh
          geometry={nodes.Mesh47_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh47_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh47_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh48_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh48_pushed_1750785210_img14_57_0.geometry}
          material={materials.pushed_1750785210_img14_57}
        />
        <mesh
          geometry={nodes.Mesh49_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh49_pushed_1750785210_img14_57_0.geometry}
          material={materials.pushed_1750785210_img14_57}
        />
        <mesh
          geometry={nodes.Mesh50_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh50_pushed_1750785210_img14_57_0.geometry}
          material={materials.pushed_1750785210_img14_57}
        />
        <mesh
          geometry={nodes.Mesh51_pushed_1750785210_img14_57_0.geometry}
          material={materials.pushed_1750785210_img14_57}
        />
        <mesh
          geometry={nodes.Mesh52_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh52_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh52_Color_37_0.geometry}
          material={materials.Color_37}
        />
        <mesh
          geometry={nodes.Mesh52_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh52_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh53_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh53_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh54_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh54_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh54_Color_35_0.geometry}
          material={materials.Color_35}
        />
        <mesh
          geometry={nodes.Mesh54_Color_19_0.geometry}
          material={materials.Color_19}
        />
        <mesh
          geometry={nodes.Mesh54_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh55_pushed_1750785210_img14_57_0.geometry}
          material={materials.pushed_1750785210_img14_57}
        />
        <mesh
          geometry={nodes.Mesh56_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh57_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh58_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh59_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh60_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh61_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh62_Color_59_0.geometry}
          material={materials.Color_59}
        />
        <mesh
          geometry={nodes.Mesh63_pushed_1750785210_img5_60_0.geometry}
          material={materials.pushed_1750785210_img5_60}
        />
        <mesh
          geometry={nodes.Mesh64_Color_61_0.geometry}
          material={materials.Color_61}
        />
        <mesh
          geometry={nodes.Mesh65_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh65_pushed_1750785210_img8_36_0.geometry}
          material={materials.pushed_1750785210_img8_36}
        />
        <mesh
          geometry={nodes.Mesh65_pushed_1750785210_img15_62_0.geometry}
          material={materials.pushed_1750785210_img15_62}
        />
        <mesh
          geometry={nodes.Mesh65_Color_63_0.geometry}
          material={materials.Color_63}
        />
        <mesh
          geometry={nodes.Mesh65_Color_64_0.geometry}
          material={materials.Color_64}
        />
        <mesh
          geometry={nodes.Mesh65_Color_65_0.geometry}
          material={materials.Color_65}
        />
        <mesh
          geometry={nodes.Mesh65_pushed_1750785210_img16_66_0.geometry}
          material={materials.pushed_1750785210_img16_66}
        />
        <mesh
          geometry={nodes.Mesh66_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh67_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh68_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh69_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh70_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh71_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh72_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh72_pushed_1750785274_img13_67_0.geometry}
          material={materials.pushed_1750785274_img13_67}
        />
        <mesh
          geometry={nodes.Mesh72_pushed_1750785274_img13_67_1_0.geometry}
          material={materials.pushed_1750785274_img13_67_1}
        />
        <mesh
          geometry={nodes.Mesh72_pushed_1750785274_img11_68_0.geometry}
          material={materials.pushed_1750785274_img11_68}
        />
        <mesh
          geometry={nodes.Mesh72_pushed_1750785274_img11_68_1_0.geometry}
          material={materials.pushed_1750785274_img11_68_1}
        />
        <mesh
          geometry={nodes.Mesh72_pushed_1750785274_img12_69_0.geometry}
          material={materials.pushed_1750785274_img12_69}
        />
        <mesh
          geometry={nodes.Mesh73_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh73_pushed_1750785274_img13_67_0.geometry}
          material={materials.pushed_1750785274_img13_67}
        />
        <mesh
          geometry={nodes.Mesh73_pushed_1750785274_img13_67_1_0.geometry}
          material={materials.pushed_1750785274_img13_67_1}
        />
        <mesh
          geometry={nodes.Mesh73_pushed_1750785274_img11_68_0.geometry}
          material={materials.pushed_1750785274_img11_68}
        />
        <mesh
          geometry={nodes.Mesh73_pushed_1750785274_img11_68_1_0.geometry}
          material={materials.pushed_1750785274_img11_68_1}
        />
        <mesh
          geometry={nodes.Mesh73_pushed_1750785274_img12_69_0.geometry}
          material={materials.pushed_1750785274_img12_69}
        />
        <mesh
          geometry={nodes.Mesh74_pushed_1750785274_img14_70_0.geometry}
          material={materials.pushed_1750785274_img14_70}
        />
        <mesh
          geometry={nodes.Mesh74_Color_71_0.geometry}
          material={materials.Color_71}
        />
        <mesh
          geometry={nodes.Mesh75_Color_72_0.geometry}
          material={materials.Color_72}
        />
        <mesh
          geometry={nodes.Mesh75_pushed_1750785274_img5_73_0.geometry}
          material={materials.pushed_1750785274_img5_73}
        />
        <mesh
          geometry={nodes.Mesh75_pushed_1750785274_img14_70_0.geometry}
          material={materials.pushed_1750785274_img14_70}
        />
        <mesh
          geometry={nodes.Mesh75_pushed_1750785274_img15_74_0.geometry}
          material={materials.pushed_1750785274_img15_74}
        />
        <mesh
          geometry={nodes.Mesh75_Color_75_0.geometry}
          material={materials.Color_75}
        />
        <mesh
          geometry={nodes.Mesh75_Color_38_0.geometry}
          material={materials.Color_38}
        />
        <mesh
          geometry={nodes.Mesh76_pushed_1750785274_img15_74_0.geometry}
          material={materials.pushed_1750785274_img15_74}
        />
        <mesh
          geometry={nodes.Mesh76_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh76_Color_75_0.geometry}
          material={materials.Color_75}
        />
        <mesh
          geometry={nodes.Mesh76_Color_76_0.geometry}
          material={materials.Color_76}
        />
        <mesh
          geometry={nodes.Mesh77_pushed_1750785274_img15_74_0.geometry}
          material={materials.pushed_1750785274_img15_74}
        />
        <mesh
          geometry={nodes.Mesh77_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh77_Color_75_0.geometry}
          material={materials.Color_75}
        />
        <mesh
          geometry={nodes.Mesh78_pushed_1750785274_img14_70_0.geometry}
          material={materials.pushed_1750785274_img14_70}
        />
        <mesh
          geometry={nodes.Mesh78_Color_39_0.geometry}
          material={materials.Color_39}
        />
        <mesh
          geometry={nodes.Mesh78_Color_75_0.geometry}
          material={materials.Color_75}
        />
        <mesh
          geometry={nodes.Mesh79_Color_77_0.geometry}
          material={materials.Color_77}
        />
        <mesh
          geometry={nodes.Mesh79_pushed_1750785274_img6_78_0.geometry}
          material={materials.pushed_1750785274_img6_78}
        />
        <mesh
          geometry={nodes.Mesh80_Color_77_0.geometry}
          material={materials.Color_77}
        />
        <mesh
          geometry={nodes.Mesh80_pushed_1750785274_img7_79_0.geometry}
          material={materials.pushed_1750785274_img7_79}
        />
        <mesh
          geometry={nodes.Mesh80_pushed_1750785274_img8_80_0.geometry}
          material={materials.pushed_1750785274_img8_80}
        />
        <mesh
          geometry={nodes.Mesh81_Color_77_0.geometry}
          material={materials.Color_77}
        />
        <mesh
          geometry={nodes.Mesh81_pushed_1750785274_img7_79_0.geometry}
          material={materials.pushed_1750785274_img7_79}
        />
        <mesh
          geometry={nodes.Mesh81_pushed_1750785274_img8_80_0.geometry}
          material={materials.pushed_1750785274_img8_80}
        />
        <mesh
          geometry={nodes.Mesh82_Color_77_0.geometry}
          material={materials.Color_77}
        />
        <mesh
          geometry={nodes.Mesh82_pushed_1750785274_img7_79_0.geometry}
          material={materials.pushed_1750785274_img7_79}
        />
        <mesh
          geometry={nodes.Mesh82_pushed_1750785274_img8_80_0.geometry}
          material={materials.pushed_1750785274_img8_80}
        />
        <mesh
          geometry={nodes.Mesh83_Color_77_0.geometry}
          material={materials.Color_77}
        />
        <mesh
          geometry={nodes.Mesh83_pushed_1750785274_img9_81_0.geometry}
          material={materials.pushed_1750785274_img9_81}
        />
        <mesh
          geometry={nodes.Mesh84_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh84_pushed_1750785274_img10_82_0.geometry}
          material={materials.pushed_1750785274_img10_82}
        />
        <mesh
          geometry={nodes.Mesh84_Color_33_0.geometry}
          material={materials.Color_33}
        />
        <mesh
          geometry={nodes.Mesh84_Color_34_0.geometry}
          material={materials.Color_34}
        />
        <mesh
          geometry={nodes.Mesh85_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh85_pushed_1750785274_img13_67_0.geometry}
          material={materials.pushed_1750785274_img13_67}
        />
        <mesh
          geometry={nodes.Mesh85_pushed_1750785274_img13_67_1_0.geometry}
          material={materials.pushed_1750785274_img13_67_1}
        />
        <mesh
          geometry={nodes.Mesh85_pushed_1750785274_img11_68_0.geometry}
          material={materials.pushed_1750785274_img11_68}
        />
        <mesh
          geometry={nodes.Mesh85_pushed_1750785274_img11_68_1_0.geometry}
          material={materials.pushed_1750785274_img11_68_1}
        />
        <mesh
          geometry={nodes.Mesh85_pushed_1750785274_img12_69_0.geometry}
          material={materials.pushed_1750785274_img12_69}
        />
        <mesh
          geometry={nodes.Mesh85_Color_33_0.geometry}
          material={materials.Color_33}
        />
        <mesh
          geometry={nodes.Mesh85_Color_34_0.geometry}
          material={materials.Color_34}
        />
        <mesh
          geometry={nodes.Mesh86_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh86_pushed_1750785274_img10_82_0.geometry}
          material={materials.pushed_1750785274_img10_82}
        />
        <mesh
          geometry={nodes.Mesh86_Color_33_0.geometry}
          material={materials.Color_33}
        />
        <mesh
          geometry={nodes.Mesh86_Color_34_0.geometry}
          material={materials.Color_34}
        />
        <mesh
          geometry={nodes.Mesh87_Color_4_0.geometry}
          material={materials.Color_4}
        />
        <mesh
          geometry={nodes.Mesh87_Color_53_0.geometry}
          material={materials.Color_53}
        />
        <mesh
          geometry={nodes.Mesh88_pushed_1750785274_img14_70_0.geometry}
          material={materials.pushed_1750785274_img14_70}
        />
        <mesh
          geometry={nodes.Mesh89_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
        <mesh
          geometry={nodes.Mesh89_pushed_1750785337_img5_84_0.geometry}
          material={materials.pushed_1750785337_img5_84}
        />
        <mesh
          geometry={nodes.Mesh89_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh89_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh90_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
        <mesh
          geometry={nodes.Mesh91_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh92_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
        <mesh
          geometry={nodes.Mesh92_pushed_1750785337_img5_84_0.geometry}
          material={materials.pushed_1750785337_img5_84}
        />
        <mesh
          geometry={nodes.Mesh92_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh92_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh93_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh94_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
        <mesh
          geometry={nodes.Mesh94_pushed_1750785337_img5_84_0.geometry}
          material={materials.pushed_1750785337_img5_84}
        />
        <mesh
          geometry={nodes.Mesh94_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh94_Color_27_0.geometry}
          material={materials.Color_27}
        />
        <mesh
          geometry={nodes.Mesh95_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh96_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
        <mesh
          geometry={nodes.Mesh96_pushed_1750785337_img5_84_0.geometry}
          material={materials.pushed_1750785337_img5_84}
        />
        <mesh
          geometry={nodes.Mesh96_Color_24_0.geometry}
          material={materials.Color_24}
        />
        <mesh
          geometry={nodes.Mesh97_pushed_1750785337_img6_83_0.geometry}
          material={materials.pushed_1750785337_img6_83}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/model/scene.gltf");
