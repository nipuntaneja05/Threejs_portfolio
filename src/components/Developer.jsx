import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const Developer = ({ animationName, ...props }) => {
  const group = useRef();
  
  // Load the GLTF model
  const { nodes, materials } = useGLTF("/models/animations/developer.glb");
  
  // Load the idle FBX animation
  const idleAnimation = useFBX("/models/animations/salute.fbx");

  // Ensure idleAnimation has the correct structure
  if (idleAnimation.animations) {
    console.log("Loaded FBX Animations:", idleAnimation.animations);
    idleAnimation.animations[0].name = "idle"; // Ensure the name is set
  } else {
    console.error("Idle animation does not contain animations:", idleAnimation);
  }

  // Bind animations to the group
  const { actions } = useAnimations(idleAnimation.animations || [], group);

  useEffect(() => {
    console.log("Available Actions:", actions);
    console.log("Requested Animation Name:", animationName);

    // Check if the requested animation exists
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();

      return () => {
        actions[animationName].fadeOut(0.5); // Cleanup animation
      };
    } else {
      console.warn(`Animation "${animationName}" not found.`);
    }
  }, [animationName, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      {/* Debugging loaded nodes */}
      {console.log("Loaded Nodes:", nodes)}
      {console.log("Loaded Materials:", materials)}

      {/* GLTF nodes and skinned meshes */}
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  );
};

// Preload the GLTF and FBX files
useGLTF.preload("/models/animations/developer.glb");
useFBX.preload("/models/animations/salute.fbx");

export default Developer;
