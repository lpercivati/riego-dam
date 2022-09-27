import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValvulaPageRoutingModule } from './valvula-routing.module';

import { ValvulaPage } from './valvula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValvulaPageRoutingModule
  ],
  declarations: [ValvulaPage]
})
export class ValvulaPageModule {}
