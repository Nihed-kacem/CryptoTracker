import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XrpComponent } from './xrp.component';

const routes: Routes = [
  {
    path: '',
    component: XrpComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class XrpRoutingModule{}