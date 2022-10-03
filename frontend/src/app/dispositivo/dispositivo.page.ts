import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { Log } from '../model/log';
import { DispositivoService } from '../services/dispositivos.service';
import { MedicionService } from '../services/medicion.service';
import { ValvulaService } from '../services/valvula.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo: Dispositivo
  public ultimaMedicion:Medicion
  public ultimoLog:Log

  constructor(
    private router:ActivatedRoute, 
    private dispositivoService:DispositivoService, 
    private medicionService:MedicionService,
    private valvulaService:ValvulaService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');

    this.dispositivoService.getDispositivo(parseInt(idDispositivo)).then((result) => {
      this.dispositivo = result[0]
      
      this.valvulaService.listLogs(this.dispositivo.electrovalvulaId).then((result)=>{
        this.ultimoLog = result[0]
      })
    });

    this.medicionService.listMediciones(parseInt(idDispositivo)).then((result)=>{
      this.ultimaMedicion = result[0]
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  abrirValvula(){
    this.valvulaService.cambiarEstado(this.dispositivo.electrovalvulaId, true).then((result) => {
      debugger;
    })
  }

  cerrarValvula(){
    this.valvulaService.cambiarEstado(this.dispositivo.electrovalvulaId, false).then((result) => {
      debugger;
    })
  }

}
