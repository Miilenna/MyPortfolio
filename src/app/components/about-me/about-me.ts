import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.css'],
})
export class AboutMe {
  constructor(private router: Router) {}

  verCvEs(){
    window.open("assets/cv_es.pdf", '_blank');
  }
  verCvEn(){
    window.open("assets/cv_en.pdf", '_blank');
  }
  verRecomendacion(){
    window.open("assets/CARTA_RECOMANACIO_MILENA.pdf", '_blank');
  }
  return(){
   this.router.navigate(["/home.html"]) ;
  }
}
