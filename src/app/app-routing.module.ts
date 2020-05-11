import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "@features/base/pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse',
    loadChildren: () => import('./features/browse/browse.module').then(m => m.BrowseModule)
  },
  { path: 'add',
    loadChildren: () => import('./features/add/add.module').then(m => m.AddModule)
  },
  { path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = [
  HomeComponent,
]
