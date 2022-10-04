import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Medicion } from "../model/medicion";

@Injectable({
    providedIn: 'root'
})

export class MedicionService{
    
    private BASE_PATH ="http://localhost:8000/medicion"

    constructor(public _http:HttpClient){}

    listMediciones(dispositivoId: number) : Promise<Array<Medicion>> {
        return this._http.get<Array<Medicion>>(this.BASE_PATH + "/" + dispositivoId).toPromise();
    }

    crearMedicion(medicion: number, dispositivoId: number) : Promise<any> {
        let body = {
            valor: String(medicion),
            dispositivoId: dispositivoId
        }

        return this._http.post(this.BASE_PATH + "/", body).toPromise();
    }
}