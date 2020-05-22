import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  { path: 'browse',
    loadChildren: () => import('./features/browse/browse.module').then(m => m.BrowseModule)
  },
  { path: 'add',
    loadChildren: () => import('./features/add/add.module').then(m => m.AddModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
