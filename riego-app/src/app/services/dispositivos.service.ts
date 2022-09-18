import { Injectable } from "@angular/core";
import { Dispositivo } from "../model/dispositivo";

export class DispositivoService{
    dispositivos : Array<Dispositivo> = new Array<Dispositivo>();

    constructor(){
        this.dispositivos.push(new Dispositivo(1, "prueba1", "prueba ubicacion1", 111))
        this.dispositivos.push(new Dispositivo(2, "prueba2", "prueba ubicacion2", 112))
        this.dispositivos.push(new Dispositivo(3, "prueba3", "prueba ubicacion3", 113))
        this.dispositivos.push(new Dispositivo(4, "prueba4", "prueba ubicacion4", 114))
    }

    getDispositivo(id: number) : Dispositivo {
        return this.dispositivos.filter(dispositivo => dispositivo.dispositivoId == id)[0]
    }
}