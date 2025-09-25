import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-voxel-cat',
  template: `<div #container class="voxel-cat"></div>`,
  styleUrls: ['./voxel-cat.component.css']
})
export class VoxelCatComponent implements AfterViewInit, OnDestroy {
  loading = true;
  @ViewChild('container', { static: true }) containerRef!: ElementRef
  renderer!: THREE.WebGLRenderer
  req: number | null = null

  ngAfterViewInit(): void {
    const container = this.containerRef.nativeElement
    const scW = container.clientWidth
    const scH = container.clientHeight

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(scW, scH)
    // @ts-ignore
    this.renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(this.renderer.domElement)

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(-0.5, 1.2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    const scale = scH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, this.renderer.domElement)
    controls.autoRotate = true
    controls.target = target

    const loader = new GLTFLoader()
    const urlCatGLTF = '/catGF.gltf'

    loader.load(urlCatGLTF, gltf => {
      scene.add(gltf.scene)
      this.loading = false
      this.animate(scene, camera, controls, initialCameraPosition, target)
    })
  }

  animate(
    scene: THREE.Scene,
    camera: THREE.Camera,
    controls: OrbitControls,
    initialCameraPosition: THREE.Vector3,
    target: THREE.Vector3
  ) {
    let frame = 0
    const easeOutCirc = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 4))

    const animateFrame = () => {
      this.req = requestAnimationFrame(animateFrame)
      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      this.renderer.render(scene, camera)
    }

    animateFrame()
  }

  ngOnDestroy(): void {
    if (this.req) cancelAnimationFrame(this.req)
    this.renderer.dispose()
  }
}