import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import { DispositivoService } from '../services/dispositivos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dispositivos : Array<Dispositivo> = new Array<Dispositivo>();
  constructor(public dispositivoService: DispositivoService){}
 
  ngOnInit(): void {
    this.dispositivoService.listDispositivos().then((result)=>{
      this.dispositivos = result
    })
    .catch((err)=> {
      console.log(err)
    })
  }
}
