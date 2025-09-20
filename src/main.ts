import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/Home/home'
import { AboutMe } from './app/components/About-me/about-me';
import { Projects } from './app/components/Projects/projects';
import { Contact } from './app/components/Contact/contact';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about-me', component: AboutMe},
      { path: 'projects', component: Projects},
      { path: 'contact', component: Contact},
      { path: '**', redirectTo: ''}
    ])
  ]
})
.catch(err => console.error(err));
