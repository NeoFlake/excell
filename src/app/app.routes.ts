import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PathConstantes } from './constantes/path';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: PathConstantes.HOME, component: HomeComponent },
    { path: PathConstantes.MAIN, component: MainComponent },
    { path: PathConstantes.CONTACT, component: ContactComponent }
];
