import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { XrpComponent } from './xrp.component';
import { XrpRoutingModule } from './xrp-routing.module';



@NgModule({
  declarations: [XrpComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XrpRoutingModule
  ],
})
export class XrpModule { }
