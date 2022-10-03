import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dispositivo } from "../model/dispositivo";

@Injectable({
    providedIn: 'root'
})

export class DispositivoService{

    constructor(public _http:HttpClient){}

    getDispositivos() : Promise<Array<Dispositivo>> {
        var dispositivos = new Array<Dispositivo>();
        dispositivos.push(new Dispositivo(1, 'Sensor 1', 'Patio', 1));

        //return Promise.all(dispositivos);
        return this._http.get<Array<Dispositivo>>("http://localhost:8000/dispositivo").toPromise();
    }

    getDispositivo(id: number) : Dispositivo {
        //return this.dispositivos.filter(dispositivo => dispositivo.dispositivoId == id)[0]
        return new Dispositivo(2, "prueba2", "prueba ubicacion2", 112)
    }
}