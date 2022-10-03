import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { DispositivoService } from '../services/dispositivos.service';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo: Dispositivo
  public ultimaMedicion:Medicion
  constructor(private router:ActivatedRoute, private dispositivoService:DispositivoService, private medicionService:MedicionService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');

    this.dispositivoService.getDispositivo(parseInt(idDispositivo)).then((result) => {
      debugger;
      this.dispositivo = result
    });

    this.medicionService.listMediciones(parseInt(idDispositivo)).then((result)=>{
      this.ultimaMedicion = result[0]
    })
    .catch((err)=> {
      console.log(err)
    })
  }

}
