import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Log } from "../model/log";

@Injectable({
    providedIn: 'root'
})

export class ValvulaService{
    private BASE_PATH ="http://localhost:8000/valvula"

    constructor(public _http:HttpClient){}

    listLogs(electroValvulaId: number) : Promise<Array<Log>> {
        return this._http.get<Array<Log>>(this.BASE_PATH + "/log/" + electroValvulaId).toPromise();
    }

    cambiarEstado(electroValvulaId: number, nuevoEstado: Boolean) : Promise<any> {
        let body = {
            electroValvulaId: electroValvulaId,
            nuevoEstado: nuevoEstado
        }

        return this._http.post(this.BASE_PATH + "/log", body).toPromise()
    }
    
}