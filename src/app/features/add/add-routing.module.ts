import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from "./components/add.component";

import { AddEventFormComponent } from "./pages/add-event-form/add-event-form.component";

const addRoutes: Routes = [
  { path:  '', component:  AddComponent,
    children: [
      { path:  '', redirectTo: 'event', pathMatch: 'full' },
      { path:  'event', component:  AddEventFormComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(addRoutes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
export const addRoutingComponents = [
  AddComponent,
  AddEventFormComponent
]
