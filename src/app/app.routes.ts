import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../app/components/main/main.component').then(c => c.MainComponent),  },

];
