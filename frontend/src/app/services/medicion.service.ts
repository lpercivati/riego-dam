import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Medicion } from "../model/medicion";

@Injectable({
    providedIn: 'root'
})

export class MedicionService{
    constructor(public _http:HttpClient){}

    listMediciones(dispositivoId: number) : Promise<Array<Medicion>> {
        return this._http.get<Array<Medicion>>("http://localhost:8000/medicion/" + dispositivoId).toPromise();
    }

}