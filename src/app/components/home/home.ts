import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2
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

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private object: THREE.Object3D | null = null;
  private isMobile = window.innerWidth < 900;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.initControls();
    this.loadModel();
    this.animate();
    this.observeResize();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
  }

  private initCamera(): void {
    const container = this.containerRef.nativeElement;
    const aspectRatio = container.clientWidth / container.clientHeight;

    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.set(0, 0, this.isMobile ? 12 : 7);
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.updateRendererSize();
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);
  }

  private updateRendererSize(): void {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth || window.innerWidth;
    const height = Math.min(container.clientHeight || window.innerHeight, this.isMobile ? 500 : 700);

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    Object.assign(this.renderer.domElement.style, {
      width: '100%',
      height: 'auto',
      maxHeight: this.isMobile ? '500px' : '700px'
    });

    this.renderer2.setStyle(container, 'display', 'flex');
    this.renderer2.setStyle(container, 'justify-content', 'center');
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
    this.controls.autoRotate = !this.isMobile;
    this.controls.autoRotateSpeed = this.isMobile ? 1.0 : 3.0;
    this.controls.minDistance = this.isMobile ? 3 : 2;
    this.controls.maxDistance = this.isMobile ? 5 : 9;
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
    const baseScale = 5 / boxSize.length();
    const scaleFactor = baseScale * (this.isMobile ? 0.8 : 1.5);

    model.scale.set(
      scaleFactor * (this.isMobile ? 1 : 1.3),
      scaleFactor,
      scaleFactor
    );

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

  private observeResize(): void {
    const resizeObserver = new ResizeObserver(() => {
      this.isMobile = window.innerWidth < 900;
      this.updateRendererSize();
      this.camera.position.set(0, 0, this.isMobile ? 12 : 7);
      this.camera.updateProjectionMatrix();

      if (this.object) {
        const box = new THREE.Box3().setFromObject(this.object);
        const boxSize = box.getSize(new THREE.Vector3());
        const baseScale = 5 / boxSize.length();
        const scaleFactor = baseScale * (this.isMobile ? 0.8 : 1.5);

        this.object.scale.set(
          scaleFactor * (this.isMobile ? 1 : 1.3),
          scaleFactor,
          scaleFactor
        );
      }
    });

    resizeObserver.observe(this.containerRef.nativeElement);
  }
}