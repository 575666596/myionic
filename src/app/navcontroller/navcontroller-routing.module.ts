import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavcontrollerPage } from './navcontroller.page';

const routes: Routes = [
  {
    path: '',
    component: NavcontrollerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavcontrollerPageRoutingModule {}
