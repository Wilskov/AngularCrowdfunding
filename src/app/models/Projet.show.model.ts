import { CreatPalierModel } from "./CreatePalier.Model"

export class showProjetModel {

    id: number
    titre: string
    Description: string
    Objectif: number
    typeStatus: string
    ContributionTotal: number
    paliers: CreatPalierModel[]
    progress: number

    compteBQ: string
    dateDebut: Date
    dateFin: Date


    constructor(
        id: number,
        titre: string,
        Description: string,
        Objectif: number,
        typeStatus: string,
        ContributionTotal: number,
        paliers: CreatPalierModel[],
        compteBQ: string,
        dateDebut: Date,
        dateFin: Date
    ) {
        this.id = id
        this.titre = titre
        this.Description = Description
        this.Objectif = Objectif
        this.typeStatus = typeStatus
        this.ContributionTotal = ContributionTotal
        this.paliers = paliers
        this.compteBQ = compteBQ
        this.dateDebut = dateDebut
        this.dateFin = dateFin

        if (this.ContributionTotal >= this.Objectif)
            this.progress = 100
        else
            this.progress = this.ContributionTotal / this.Objectif * 100
    }

}