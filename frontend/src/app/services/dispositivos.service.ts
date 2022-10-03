import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dispositivo } from "../model/dispositivo";

@Injectable({
    providedIn: 'root'
})

export class DispositivoService{

    private BASE_PATH ="http://localhost:8000/dispositivo"

    constructor(public _http:HttpClient){}

    listDispositivos() : Promise<Array<Dispositivo>> {
        return this._http.get<Array<Dispositivo>>(this.BASE_PATH).toPromise();
    }

    getDispositivo(id: number) : Promise<Dispositivo> {
        return this._http.get<Dispositivo>(this.BASE_PATH + "/" + id).toPromise();
    }
}