import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three-stdlib';
import { NgtArgs, injectStore, injectLoader, injectBeforeRender } from '@angular-three/core';

extend(THREE);
extend({ OrbitControls });

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NgtArgs],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  ngtStore = injectStore();
  @ViewChild('orbitControls') orbitControls!: ElementRef<OrbitControls>;

  gltf = injectLoader(() => GLTFLoader, () => `/cat.gltf`);

  model = computed(() => {
    const gltf = this.gltf();
    return gltf ? gltf.scene : null;
  });

  camera = this.ngtStore.select('camera');
  glDomElement = this.ngtStore.select('gl', 'domElement');

  constructor() {
    injectBeforeRender(() => {
      const controls = this.orbitControls?.nativeElement;
      if (controls) controls.update();
    });
  }
}