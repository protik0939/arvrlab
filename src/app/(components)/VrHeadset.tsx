"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const VrHeadset = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const targetRotation = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRotation = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    cameraRef.current = camera;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Removed background
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // OrbitControls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load(
      "/ARVRLabLogo.glb",
      (gltf) => {
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }
        modelRef.current = gltf.scene;

        // **Make the object bigger**
        modelRef.current.scale.set(.8, .8, .8);

        // **Move it slightly to the right**
        modelRef.current.position.set(3, -.5, 0);

        scene.add(modelRef.current);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // Mouse Move Interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!modelRef.current) return;

      // Normalize mouse position to range [-1, 1]
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

      // Set target rotation based on mouse movement
      targetRotation.current.x = -mouseY * 0.3; // Up-down tilt
      targetRotation.current.y = mouseX * 0.5;  // Left-right rotation
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop (with Smooth Lerp)
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      
      // Smoothly interpolate the rotations towards the target values
      if (modelRef.current) {
        currentRotation.current.x = THREE.MathUtils.lerp(
          currentRotation.current.x,
          targetRotation.current.x,
          0.1 // Smoothness factor (lower = smoother, higher = snappier)
        );
        currentRotation.current.y = THREE.MathUtils.lerp(
          currentRotation.current.y,
          targetRotation.current.y,
          0.1
        );

        // Apply the smooth rotations to the model
        modelRef.current.rotation.x = currentRotation.current.x;
        modelRef.current.rotation.y = currentRotation.current.y;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on Unmount
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default VrHeadset;
