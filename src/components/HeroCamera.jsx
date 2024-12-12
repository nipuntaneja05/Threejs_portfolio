import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';

const HeroCamera = ({ children, target = [0, 0, 20], smoothTime = 0.25, isMobile = false }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smoothly adjust the camera position towards the target
    easing.damp3(state.camera.position, target, smoothTime, delta);

    if (groupRef.current) {
      // Rotate the group based on pointer position for non-mobile devices
      const pointerRotation = [
        -state.pointer.y / 3, // Rotation along the X-axis
        -state.pointer.x / 5, // Rotation along the Y-axis
        0, // No rotation along the Z-axis
      ];

      if (!isMobile) {
        easing.dampE(groupRef.current.rotation, pointerRotation, smoothTime, delta);
      }

      // Dynamically adjust the scale based on isMobile
      const currentScaleFactor = isMobile ? 1 : 1.25;
      easing.damp3(
        groupRef.current.scale,
        [currentScaleFactor, currentScaleFactor, currentScaleFactor], // Apply uniform scaling
        smoothTime,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default HeroCamera;
