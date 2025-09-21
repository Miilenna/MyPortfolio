import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  constructor(private router: Router) {}
  
  showContent = false;
  seeContact() {
    this.showContent = !this.showContent;
  }

  return(){
   this.router.navigate(["/home.html"]) ;
  }

  contacts = [
    {id: 1, 
      title: 'LinkedIn', 
      icon: "/linkedin.png",
      explication: `Aquí puedes encontrar mi perfil de LinkedIn completo:`, 
      url: 'www.linkedin.com/in/milena-vardumyan-aleksanyan-182928196', 
      show: false
    }, 
    {id: 2, 
      title: 'Email', 
      icon: "/email.png",
      explication: `Aquí está mi email por si necesitas contactar conmigo:`, 
      url: 'milena200.fv@gmail.com', 
      show: false
    }, 
    {id: 3, 
      title: 'PhoneNumber', 
      icon: "/phone.png",
      explication: `Aquí tienes mi numéro de teléfono por si quieres contactar conmigo:`, 
      url: '+34 698 422 556', 
      show: false
    }, 
  ]
  toggleContact(contact: any) {
    contact.show = !contact.show
  }
}
