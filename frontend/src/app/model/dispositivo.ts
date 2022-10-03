export class Dispositivo {
    public dispositivoId : number
    public nombre: string
    public ubicacion: string
    public electrovalvulaId: number

    constructor(dispositivoId: number, nombre: string, ubicacion: string, electrovalvulaId: number){
        this.dispositivoId = dispositivoId
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.electrovalvulaId = electrovalvulaId
    }
}