export class Medicion {
    public Id : number
    public dispositivoId : number
    public fecha: Date
    public medicion: number

    constructor(dispositivoId: number, fecha: Date, medicion: number){
        this.Id = Math.random()
        this.dispositivoId = dispositivoId
        this.fecha = fecha
        this.medicion = medicion
    }
}