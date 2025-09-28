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
      icon: "assets/linkedin.png",
      explication: `My LinkedIn profile:`, 
      url: 'https://www.linkedin.com/in/milena-vardumyan-aleksanyan', 
      show: false
    }, 
    {id: 2, 
      title: 'Email', 
      icon: "assets/email.png",
      explication: `You can contact me using this email:`, 
      url: 'mailto:milenavardalek04@gmail.com', 
      show: false
    }, 
    {id: 3, 
      title: 'PhoneNumber', 
      icon: "assets/phone.png",
      explication: `You can contact me using this number:`, 
      url: 'https://wa.me/34698422556', 
      show: false
    }, 
  ]
  toggleContact(contact: any) {
    contact.show = !contact.show
  }
}
