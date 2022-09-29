import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValvulaPage } from './valvula.page';

const routes: Routes = [
  {
    path: '',
    component: ValvulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValvulaPageRoutingModule {}
