import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Circle = ({ position, color, speed }) => {
  const mesh = useRef();

 
  const velocity = [Math.random() * speed - speed / 2, Math.random() * speed - speed / 2, Math.random() * speed - speed / 2];

  useFrame(() => {
    
    if (mesh.current) {
      mesh.current.position.x += velocity[0];
      mesh.current.position.y += velocity[1];
      mesh.current.position.z += velocity[2];
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};


const MovingCircles = ({ colors }) => {
  const pastelBackground = '#f0f0f0';
  const numCircles = 30;
  const positions = Array.from({ length: numCircles }, () => [
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
  ]);

  return (
    <Canvas style={{ height: '100vh', background: pastelBackground }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {positions.map((pos, i) => (
        <Circle key={i} position={pos} color={colors[i % colors.length]} speed={0.1} />
      ))}
    </Canvas>
  );
};


export default MovingCircles;
