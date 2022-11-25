import { CreatPalierModel } from "./CreatePalier.Model"

export class showProjetModel {

    id: number
    titre: string
    Description: string
    Objectif: number
    TypeStatus: string
    ContributionTotal: number
    paliers: CreatPalierModel[]
    progress : number
    
    constructor(
        id: number,
        titre: string,
        Description: string,
        Objectif: number,
        TypeStatus: string,
        ContributionTotal: number,
        paliers: CreatPalierModel[]
    ) {
        this.id = id
        this.titre = titre
        this.Description = Description
        this.Objectif = Objectif
        this.TypeStatus = TypeStatus
        this.ContributionTotal = ContributionTotal
        this.paliers = paliers

        if(this.ContributionTotal >= this.Objectif) 
            this.progress = 100
        else 
            this.progress = this.ContributionTotal / this.Objectif * 100
    } 

}