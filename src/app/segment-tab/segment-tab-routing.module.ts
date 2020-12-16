import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentTabPage } from './segment-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentTabPageRoutingModule {}
