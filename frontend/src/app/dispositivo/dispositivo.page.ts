import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { Log } from '../model/log';
import { DispositivoService } from '../services/dispositivos.service';
import { MedicionService } from '../services/medicion.service';
import { ValvulaService } from '../services/valvula.service';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo: Dispositivo;
  public ultimaMedicion:Medicion;
  public ultimoLog:Log;
  public myChart;
  public hayError: boolean = false;

  constructor(
    private router:ActivatedRoute, 
    private dispositivoService:DispositivoService, 
    private medicionService:MedicionService,
    private valvulaService:ValvulaService) { 
    }

  ngOnInit() {
    this.generarChart();
    let idDispositivo = this.router.snapshot.paramMap.get('id');

    this.dispositivoService.getDispositivo(parseInt(idDispositivo)).then((result) => {
      this.dispositivo = result[0]
      
      this.valvulaService.listLogs(this.dispositivo.electrovalvulaId).then((result)=>{
        this.ultimoLog = result[0]
      })

      this.medicionService.listMediciones(this.dispositivo.dispositivoId).then((result)=>{
        this.ultimaMedicion = result[0]
        this.actualizarValor(parseInt(this.ultimaMedicion.valor));
      })
    })
    .catch((error) => {
      this.hayError = true;
    });
  }

  actualizarValor(valor: Number) {
      this.myChart.update({series: [{
        name: 'kPA',
        data: [valor],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]});
  }

  abrirValvula(){
    this.valvulaService.cambiarEstado(this.dispositivo.electrovalvulaId, true).then((result) => {
      this.valvulaService.listLogs(this.dispositivo.electrovalvulaId).then((result)=>{
        this.ultimoLog = result[0]
        this.hayError = false;
      })
    }).catch((error) => {
      this.hayError = true;
    })
  }

  cerrarValvula(){
    this.valvulaService.cambiarEstado(this.dispositivo.electrovalvulaId, false).then((result) => {
      let nuevaMedicion = Math.floor(Math.random() * 100);
      this.medicionService.crearMedicion(nuevaMedicion,this.dispositivo.dispositivoId).then((result) => {
        this.valvulaService.listLogs(this.dispositivo.electrovalvulaId).then((result)=>{
          this.ultimoLog = result[0]
          this.actualizarValor(nuevaMedicion);
          this.hayError = false;
        })
      })
    }).catch((error) => {
      this.hayError = true;
    })
  }

  generarChart() {
    let options ={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor'
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [0],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', options as any );
  }
}
