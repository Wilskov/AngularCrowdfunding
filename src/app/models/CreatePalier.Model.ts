
export class CreatPalierModel {
    id: number = 0
    idProjet : number = 0
    title: string
    montant: number
    description: string
    constructor(title: string = "", montant: number = 0, description: string = "") {
        this.title = title
        this.montant = montant
        this.description = description
    }
}