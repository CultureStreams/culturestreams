import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";

import { StartComponent } from './pages/start/start.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const homeRoutes: Routes = [
  { path: '', component:  HomeComponent,
    children: [
      { path: '', component: StartComponent },
      { path: 'home', component: StartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
export const homeRoutingComponents = [
  HomeComponent,
  StartComponent,
  AboutComponent,
  ContactComponent
]
