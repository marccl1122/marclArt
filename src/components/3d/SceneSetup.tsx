import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function SceneSetup() {
  const { scene, camera } = useThree()

  // Initialize scene
  useEffect(() => {
    // Set background
    scene.background = new THREE.Color(0x12121d)
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    scene.add(ambientLight)
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x7f5af0, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)
    
    // Add point light
    const pointLight = new THREE.PointLight(0x3da9fc, 1, 10)
    pointLight.position.set(-2, -1, -3)
    scene.add(pointLight)

    // Camera settings
    camera.near = 0.1
    camera.far = 100
    camera.updateProjectionMatrix()

    return () => {
      // Cleanup lights
      scene.remove(ambientLight)
      scene.remove(directionalLight)
      scene.remove(pointLight)
    }
  }, [scene, camera])

  return null
}