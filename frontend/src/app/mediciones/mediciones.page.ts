import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  public mediciones : Array<Medicion> = new Array<Medicion>();
  public hayError: boolean = false;

  constructor(private router:ActivatedRoute, private medicionService:MedicionService) { }

  ngOnInit() {
    let dispositivoId = this.router.snapshot.paramMap.get('dispositivoId');

    this.medicionService.listMediciones(parseInt(dispositivoId)).then((result) => {
      this.mediciones = result
    }).catch((err)=> {
      this.hayError = true;
    })
    ;
  }

}
