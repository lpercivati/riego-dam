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
        return this._http.get<Array<Dispositivo>>("localhost:8000/dispositivos").toPromise();
    }

    getDispositivo(id: number) : Dispositivo {
        //return this.dispositivos.filter(dispositivo => dispositivo.dispositivoId == id)[0]
        return new Dispositivo(2, "prueba2", "prueba ubicacion2", 112)
    }
}