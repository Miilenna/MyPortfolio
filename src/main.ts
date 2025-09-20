import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { Home } from './app/components/home/home';
import { AboutMe } from './app/components/about-me/about-me';
import { Projects } from './app/components/projects/projects';
import { Contact } from './app/components/contact/contact';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: Home },
      { path: 'about-me', component: AboutMe},
      { path: 'projects', component: Projects},
      { path: 'contact', component: Contact},
      { path: '**', redirectTo: ''}
    ])
  ]
})
.catch(err => console.error(err));
