import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LitecoinComponent } from './litecoin/litecoin.component';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
