import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Log } from "../model/log";

@Injectable({
    providedIn: 'root'
})

export class LogService{
    constructor(public _http:HttpClient){}

    listLogs(electroValvulaId: number) : Promise<Array<Log>> {
        return this._http.get<Array<Log>>("http://localhost:8000/log/" + electroValvulaId).toPromise();
    }

}