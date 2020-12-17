import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';

// 1.引入login组件
import { LoginComponent } from './components/login/login.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  // 2.声明
  declarations: [ModalPage, LoginComponent],
  // 3.实测可有可无
  entryComponents: [LoginComponent]
})
export class ModalPageModule { }
