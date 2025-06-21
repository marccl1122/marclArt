// components/3d/ModelLoader.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'

const FallbackModel = () => (
  <mesh>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="#7f5af0" emissive="#7f5af0" emissiveIntensity={0.5} />
  </mesh>
)

export default function ModelLoader({ modelError }: { modelError?: boolean }) {
  const [loadError, setLoadError] = useState(false)
  const modelUrl = '/models/abstract_art.glb'

  // Fallback to a sample model if needed
  const actualModelUrl = modelError || loadError 
    ? 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF/Duck.gltf'
    : modelUrl

  return (
    <div className="relative h-[60vh] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<FallbackModel />}>
          {loadError || modelError ? (
            <FallbackModel />
          ) : (
            <Model 
              url={actualModelUrl} 
              onError={() => setLoadError(true)}
            />
          )}
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
      
      {(loadError || modelError) && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-purple-300 text-sm">
          Using fallback model (original failed to load)
        </div>
      )}
    </div>
  )
}

function Model({ url, onError }: { url: string, onError: () => void }) {
  const { scene } = useGLTF(url, undefined, undefined, (e) => {
    console.error('Model load error:', e)
    onError()
  })
  return <primitive object={scene} scale={1.5} />
}