export class ContributionModel {

    montant: number
    idProject: number
    idUser: number
    id: number

    constructor(
        montant: number,
        idProject: number,
        idUser: number = 0,
        id: number = 0
    ) {
        this.montant = montant
        this.idProject = idProject
        this.idUser = idUser
        this.id = id
    }


}