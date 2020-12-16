import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentTabPageRoutingModule } from './segment-tab-routing.module';

import { SegmentTabPage } from './segment-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentTabPageRoutingModule
  ],
  declarations: [SegmentTabPage]
})
export class SegmentTabPageModule {}
