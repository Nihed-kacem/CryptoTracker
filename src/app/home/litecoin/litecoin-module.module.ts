import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LitecoinRoutingModule } from './litecoin-routing.module';
import { LitecoinComponent } from './litecoin.component';



@NgModule({
  declarations: [LitecoinComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LitecoinRoutingModule
  ]
})
export class LitecoinModuleModule { }
