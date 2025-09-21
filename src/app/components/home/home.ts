import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('container3D', { static: true }) containerRef!: ElementRef;

  private object: THREE.Object3D | null = null;
  private controls!: OrbitControls;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;

  ngAfterViewInit(): void {
    this.initScene();
    this.initLights();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.loadModel();
    this.animate();
    this.handleResize();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
  }

  private initCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 10);
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.updateRendererSize();
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);
  }

  private updateRendererSize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private initLights(): void {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(500, 500, 500);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 20);
    this.scene.add(ambientLight);
  }

  private initControls(): void {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 3.0;
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(
      '/catGF.gltf',
      gltf => this.onModelLoaded(gltf.scene),
      xhr => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
      error => console.error('Error loading model:', error)
    );
  }

  private onModelLoaded(model: THREE.Object3D): void {
    this.object = model;

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    const boxSize = box.getSize(new THREE.Vector3());
    const scaleFactor = 5 / boxSize.length();
    model.scale.setScalar(scaleFactor * 1.4); 

    this.scene.add(model);

    this.controls.target.copy(model.position);
    this.controls.update();
    this.camera.lookAt(model.position);
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  private handleResize(): void {
    window.addEventListener('resize', () => {
      this.updateRendererSize();
    });
  }
}