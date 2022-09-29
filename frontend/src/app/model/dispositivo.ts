export class Dispositivo {
    public dispositivoId : number
    public nombre: string
    public ubicacion: string
    public valvulaId: number

    constructor(dispositivoId: number, nombre: string, ubicacion: string, valvulaId: number){
        this.dispositivoId = dispositivoId
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.valvulaId = valvulaId
    }
}