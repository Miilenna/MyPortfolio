import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(4, 2, 1);
    camera.zoom = 4;
    camera.updateProjectionMatrix();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const pointLight1 = new THREE.PointLight(0xffffff, 0.5);
    pointLight1.position.set(1, 1, 0);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-0.5, -0.5, 0);
    pointLight2.castShadow = true;
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.5);
    pointLight3.castShadow = true;
    scene.add(pointLight3);

    const ambientFront = new THREE.AmbientLight(0xffffff, 2);
    ambientFront.position.set(0, 0, 1);
    scene.add(ambientFront);

    const ambientBack = new THREE.AmbientLight(0xffffff, 2);
    ambientBack.position.set(0, 0, -1);
    scene.add(ambientBack);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    // GLTF Loader
    const loader = new GLTFLoader();
    let mixer: THREE.AnimationMixer | null = null;
    const clock = new THREE.Clock();

    loader.load(
      '/public/catGF.gltf',
      (gltf) => {
        gltf.scene.position.set(0, -0.7, -0.1);
        gltf.scene.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        scene.add(gltf.scene);

        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => {
            mixer!.clipAction(clip).play();
          });
        }
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Resize handler
    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }
}