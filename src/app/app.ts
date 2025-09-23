// src/app/app.ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements AfterViewInit {
   @ViewChild('vantaContainer', { static: true }) vantaRef!: ElementRef;

  ngAfterViewInit(): void {
    VANTA.NET({
      el: this.vantaRef.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xc53fff
    });
  }
 }
