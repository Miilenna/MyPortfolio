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
      title: 'Aunt Project', 
      explication: `This is the first website I created when I started my DAW studies, built with HTML, CSS, and JavaScript. 
      At that time, I barely knew programming and needed some help with JavaScript, but it was a great first step. 
      I created this website in Russian because it was made for my aunt, who owns a salon in Russia. 
      Today, with much more knowledge and tools, I could rebuild it independently and with significant improvements.`, 
      miniature: '/aunt.png', 
      github: 'https://www.studioSharm.com', 
      show: false}, 
    {id: 2, 
      title: 'Map Project', 
      explication: `Map Project`, 
      miniature: 'FOTO', 
      github: 'GITHUB', 
      show: false}, 
    {id: 3, 
      title: 'Buy&Sell Cars', 
      explication: `Buy&Sell Cars`, 
      miniature: 'FOTO', 
      github: 'GITHUB', 
      show: false}, 
    {id: 4, title: 'VideoGames Project', explication: `VideoGames Project`, miniature: 'FOTO', github: 'GITHUB', show: false}, 
    {id: 5, title: 'My portfolio project', explication: `My portfolio project`, miniature: 'FOTO', github: 'GITHUB', show: false}, 
    {id: 6, title: 'Nuska project', explication: `Nuska project`, miniature: 'FOTO', github: 'GITHUB', show: false}, 
    {id: 7, title: 'Barber Sant Joan Project', explication: `Barber Sant Joan Project`, miniature: 'FOTO', github: 'GITHUB', show: false}
  ];

  toggleProject(project: any) {
    project.show = !project.show
  }
}
