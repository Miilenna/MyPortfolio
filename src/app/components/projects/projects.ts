import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  constructor(private router: Router) {}
  return(){
   this.router.navigate(["/home.html"]) ;
  }

  showContent = false;
  seeProject() {
    this.showContent = !this.showContent;
  }
  projects = [
    {id: 1, 
      title: 'My first web', 
      explication: `This is the first website I created when I started my DAW studies, built with HTML, CSS, and JavaScript. 
      At that time, I barely knew programming and needed some help with JavaScript, but it was a great first step. 
      I created this website in Russian because it was made for my aunt, who owns a salon in Russia. 
      Today, with much more knowledge and tools, I could rebuild it independently and with significant improvements.`, 
      miniature: '/aunt.png', 
      github: 'https://www.studioSharm.com', 
      show: false
    }, 
    {id: 2, 
      title: 'My portfolio project', 
      explication: `I know this portfolio still has room for improvement—both visually and in terms of performance, 
      but I plan to keep refining it over time and adding more projects in the future. 
      For now, I’ve included the ones I consider most important and that best showcase what I’m capable of. 
      The 3D model displayed when you first enter the site was designed by me. 
      However, the script that enables interaction and rotation from different angles is a prebuilt solution 
      I integrated; it’s the only part not developed by me. 
      While building this portfolio, I truly learned how to work with Angular, 
      as this was my first project using the framework. 
      Let me know if you'd like to tailor it for a specific audience—like recruiters or clients—or 
      add a touch of personality to make it stand out even more.`, 
      miniature: '/portfolio.png', 
      github: 'https://github.com/Miilenna/MyPortfolio', 
      show: false
    }, 
    {id: 3, 
      title: 'Video Game E-Commerce Platform', 
      explication: `Group project inspired by platforms like Instant Gaming. 
      Each team member was responsible for different sections; 
      I developed the login and registration system, as well as the user profile, 
      including payment card management and purchase history.
      The frontend was built using JavaScript, HTML, and CSS. 
      We used PostgreSQL to store product and user data, 
      and the backend was developed with Django REST Framework (DRF).`, 
      miniature: '/games.png', 
      github: 'https://github.com/danivm-iticbcn/vgameFront', 
      show: false
    }, 
    {id: 4, 
      title: 'Vehicle Marketplace Platform', 
      explication: `Group project combining knowledge from ASIX, DAM, and DAW. 
      I was fully responsible for the web development, using JavaScript, HTML, and CSS. 
      The platform includes a PostgreSQL database to store vehicle listings, 
      and I implemented a complete CRUD system for all operations using Django REST Framework (DRF).`,
      miniature: '/carplaytrade.png', 
      github: 'https://github.com/Miilenna/CarPlayTrade', 
      show: false
    }, 
    {id: 5, 
      title: 'Web Application for Interactive Itineraries', 
      explication: `A web app that displays itineraries on a map using data from a CSV file. 
      It automatically detects the user's location on startup and allows filtering points by category 
      (culture, leisure, dining, etc.) and sorting them in ascending or descending order.
      Build with JavaScript, HTML and CSS`, 
      miniature: '/map.png', 
      github: 'https://github.com/Miilenna/Mapa_M6', 
      show: false
    }, 
    {id: 6, 
      title: 'Barbershop Website', 
      explication: `This project was developed during my internship alongside a teammate with whom 
      I collaborated closely to bring the site to life. We built the website using WordPress 
      and the Elementor Pro plugin, tailored for a client who owned a barbershop and had a 
      strong passion for motorcycles. We merged both themes into the design, just as the client envisioned. 
      Through this experience, I strengthened my team communication skills and learned 
      how to effectively engage with the client to understand and deliver on their vision.`, 
      miniature: '/barber.png', 
      github: 'https://www.barbersantjoan.com/', 
      show: false
    },
    {id: 7, 
      title: 'Hair & Beauty Salon Website', 
      explication: `This was the first and only project I developed entirely on my own during my internship. 
      It was created for a client who needed a website for her hair and beauty salon. 
      I built it using WordPress and the Divi plugin, which allowed me to design a visually appealing 
      and functional site showcasing her services and the products she sells. 
      It was also my first experience communicating directly with a client, which helped me improve my c
      ommunication skills, learn how to clearly convey technical decisions, 
      and build trust to ensure the client felt confident the site would be delivered on time.`, 
      miniature: '/nuska.png', 
      github: 'https://www.nuskasalon.com/', 
      show: false
    }
  ];

  toggleProject(project: any) {
    project.show = !project.show
  }
}
