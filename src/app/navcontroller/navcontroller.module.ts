import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavcontrollerPageRoutingModule } from './navcontroller-routing.module';

import { NavcontrollerPage } from './navcontroller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavcontrollerPageRoutingModule
  ],
  declarations: [NavcontrollerPage]
})
export class NavcontrollerPageModule {}
