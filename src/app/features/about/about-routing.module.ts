import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about.component";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

const aboutRoutes: Routes = [
  {
path:  '',
component:  AboutComponent,
children: [
        {
        path:  '',
        component:  AboutUsComponent
        },
        {
        path:  'contact',
        component:  ContactComponent
        }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
export const aboutRoutingComponents = [
  AboutComponent,
  AboutUsComponent,
  ContactComponent
]
