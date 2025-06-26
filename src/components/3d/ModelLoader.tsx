// components/3d/ModelLoader.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

const FallbackModel = () => (
  <mesh>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="#7f5af0" emissive="#7f5af0" emissiveIntensity={0.5} />
  </mesh>
)

export default function ModelLoader() {
  return (
    <div className="relative h-[60vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<FallbackModel />}>
          <FallbackModel />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-purple-300 text-sm">
        Interactive 3D Art Experience
      </div>
    </div>
  )
}