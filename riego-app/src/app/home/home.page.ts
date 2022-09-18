import { Component } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import { DispositivoService } from '../services/dispositivos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public dispositivoService: DispositivoService){}
 
}
