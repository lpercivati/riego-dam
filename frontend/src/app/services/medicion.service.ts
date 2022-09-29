import { Medicion } from "../model/medicion";

export class MedicionService{
    mediciones : Array<Medicion> = new Array<Medicion>();

    constructor(){
        this.mediciones.push(new Medicion(1, new Date(), 111))
        this.mediciones.push(new Medicion(1, new Date(), 110))
        this.mediciones.push(new Medicion(1, new Date(), 16))
        this.mediciones.push(new Medicion(1, new Date(), 151))
        this.mediciones.push(new Medicion(1, new Date(), 88))
        this.mediciones.push(new Medicion(1, new Date(), 10))
        this.mediciones.push(new Medicion(2, new Date(), 112))
        this.mediciones.push(new Medicion(3, new Date(), 113))
        this.mediciones.push(new Medicion(4, new Date(), 114))
    }

    listMediciones(dispositivoId: number) : Array<Medicion>{
        return this.mediciones.filter(medicion => medicion.dispositivoId == dispositivoId)
    }
}