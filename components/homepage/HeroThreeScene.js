"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
    });

    if (!context) {
      console.warn("WebGL 2 is unavailable; skipping the decorative hero scene.");
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      context,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 14;
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 1.8));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(-4, 7, 10);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xf7b45e, 35, 18);
    fillLight.position.set(4, -2, 6);
    scene.add(fillLight);

    const objects = [];

    function addFloatingObject(mesh, xFactor, yFactor, amplitude = 0.22) {
      scene.add(mesh);
      objects.push({
        mesh,
        xFactor,
        yFactor,
        amplitude,
        baseRotationX: mesh.rotation.x,
        baseRotationY: mesh.rotation.y,
        baseRotationZ: mesh.rotation.z,
        basePositionY: 0,
        phase: objects.length * 1.3,
      });
    }

    const book = new THREE.Group();
    const pages = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.2, 0.88),
      new THREE.MeshStandardMaterial({
        color: 0xfff7e8,
        roughness: 0.72,
      })
    );
    book.add(pages);

    const coverMaterial = new THREE.MeshStandardMaterial({
      color: 0x397558,
      roughness: 0.4,
    });
    const coverGeometry = new THREE.BoxGeometry(1.32, 0.07, 0.98);
    const topCover = new THREE.Mesh(coverGeometry, coverMaterial);
    topCover.position.y = 0.14;
    book.add(topCover);

    const bottomCover = new THREE.Mesh(coverGeometry, coverMaterial);
    bottomCover.position.y = -0.14;
    book.add(bottomCover);

    const spine = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.3, 0.98),
      coverMaterial
    );
    spine.position.x = -0.6;
    book.add(spine);
    book.rotation.set(0.35, -0.55, -0.28);
    addFloatingObject(book, -0.7, -0.2, 0.25);

    const orangeKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.52, 0.13, 96, 12, 2, 3),
      new THREE.MeshStandardMaterial({
        color: 0xf47718,
        roughness: 0.3,
        metalness: 0.12,
      })
    );
    orangeKnot.rotation.set(0.5, 0.3, -0.2);
    addFloatingObject(orangeKnot, 0.7, 0.38, 0.2);

    const greenShape = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.58, 0),
      new THREE.MeshStandardMaterial({
        color: 0x86a94b,
        roughness: 0.42,
        flatShading: true,
      })
    );
    greenShape.rotation.set(0.35, 0.6, 0.15);
    addFloatingObject(greenShape, -0.64, 0.42);

    const blueShape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.48, 1),
      new THREE.MeshStandardMaterial({
        color: 0x72b7e6,
        roughness: 0.35,
        metalness: 0.08,
      })
    );
    blueShape.rotation.set(0.5, -0.2, 0.4);
    addFloatingObject(blueShape, 0.58, -0.43, 0.18);

    const goldRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.1, 16, 48),
      new THREE.MeshStandardMaterial({
        color: 0xf2bd43,
        roughness: 0.3,
        metalness: 0.1,
      })
    );
    goldRing.rotation.set(0.9, 0.2, -0.5);
    addFloatingObject(goldRing, 0.22, -0.68, 0.16);

    function resizeScene() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const visibleHeight =
        2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      objects.forEach((object) => {
        const { mesh, xFactor, yFactor } = object;
        mesh.position.x = (visibleWidth / 2) * xFactor;
        mesh.position.y = (visibleHeight / 2) * yFactor;
        object.basePositionY = mesh.position.y;
      });
    }

    const clock = new THREE.Clock();
    function renderScene() {
      const elapsed = clock.getElapsedTime();

      objects.forEach((object) => {
        const { mesh, amplitude, phase } = object;
        mesh.position.y =
          object.basePositionY +
          Math.sin(elapsed * 0.9 + phase) * amplitude;
        mesh.rotation.x = object.baseRotationX + Math.sin(elapsed * 0.45 + phase) * 0.12;
        mesh.rotation.y = object.baseRotationY + elapsed * 0.18;
        mesh.rotation.z =
          object.baseRotationZ + Math.cos(elapsed * 0.55 + phase) * 0.08;
      });

      renderer.render(scene, camera);
    }

    resizeScene();
    window.addEventListener("resize", resizeScene);

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const updateAnimation = () => {
      if (motionPreference.matches) {
        renderer.setAnimationLoop(null);
        renderScene();
      } else {
        renderer.setAnimationLoop(renderScene);
      }
    };

    motionPreference.addEventListener("change", updateAnimation);
    updateAnimation();

    return () => {
      motionPreference.removeEventListener("change", updateAnimation);
      window.removeEventListener("resize", resizeScene);
      renderer.setAnimationLoop(null);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[150px] z-0 h-[560px] overflow-hidden"
    />
  );
}
