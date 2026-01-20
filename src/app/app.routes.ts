import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: "homepage", component: HomepageComponent },
    { path: "navbar", component: NavbarComponent },
    { path: "", redirectTo: "homepage", pathMatch: "full" }
];
