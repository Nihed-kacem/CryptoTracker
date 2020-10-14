import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EthereumComponent } from './ethereum.component';
import { EthereumRoutingModule } from './ethereum-routing.module';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EthereumRoutingModule
  ],
  declarations: [EthereumComponent]
})
export class EthereumModule { }
