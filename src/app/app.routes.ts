import { Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { VilainsComponent } from '../vilains/vilains.component';
import { VilainDetailComponent } from '../vilain-detail/vilain-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/hero/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/vilain/:id', component: VilainDetailComponent },
    { path: 'vilains', component: VilainsComponent }
];
