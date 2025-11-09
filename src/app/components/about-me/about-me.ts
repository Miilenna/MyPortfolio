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
  
  verRecomendacion(){
    window.open("assets/CARTA_RECOMANACIO_MILENA.pdf", '_blank');
  }
  return(){
   this.router.navigate(["/home.html"]) ;
  }

  nextLogoId = 1;

  createLogo = (icon: string) => {
    const newLogo = {
      id: this.nextLogoId++,
      icon,
      show: false
    };
    return newLogo;
  };

  logos = [
    this.createLogo(
      'assets/logos/html.png'
    ),
    this.createLogo(
      'assets/logos/css.png',
    ),
    this.createLogo(
      'assets/logos/js.png',
    ),
    this.createLogo(
      'assets/logos/ts.png',
    ),
    this.createLogo(
      'assets/logos/angular.png',
    ),
    this.createLogo(
      'assets/logos/react.png',
    ),
    this.createLogo(
      'assets/logos/ux_ui.png',
    ),
    this.createLogo(
      'assets/logos/wordpress.png',
    ),
    this.createLogo(
      'assets/logos/elementor.png',
    ),
    this.createLogo(
      'assets/logos/divi.png',
    ),
    this.createLogo(
      'assets/logos/prestashop.png',
    ),
    this.createLogo(
      'assets/logos/tailwind-css.png',
    ),
    this.createLogo(
      'assets/logos/python.png',
    ),
    this.createLogo(
      'assets/logos/django.png',
    ),
    this.createLogo(
      'assets/logos/java.png',
    ),
    this.createLogo(
      'assets/logos/net-core.png',
    ),
    this.createLogo(
      'assets/logos/asp-net.png',
    ),
    this.createLogo(
      'assets/logos/apache2.png',
    ),
    this.createLogo(
      'assets/logos/node-js.png',
    ),
    this.createLogo(
      'assets/logos/mysql.png',
    ),
    this.createLogo(
      'assets/logos/postgres.png',
    ),
    this.createLogo(
      'assets/logos/mongo-db.png',
    ),
    this.createLogo(
      'assets/logos/git.png',
    ),
    this.createLogo(
      'assets/logos/ci-cd.png',
    ),
    this.createLogo(
      'assets/logos/json.png',
    ),
    this.createLogo(
      'assets/logos/xml.png',
    ),
    this.createLogo(
      'assets/logos/power-bi.png',
    )
  ];
}
