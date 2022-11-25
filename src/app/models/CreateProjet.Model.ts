import { CreatPalierModel } from "./CreatePalier.Model"

export class CreateProjetModel {

	id: number
	titre: string
	description: string
	objectif: number
	compteBQ: string
	dateDebut: Date
	dateFin: Date
	idUserOwner: number
	idStatus: number
	paliers: CreatPalierModel[]


	constructor(
		titre: string,
		description: string,
		objectif: number,
		compteBQ: string,
		dateDebut: Date,
		dateFin: Date,
		paliers: CreatPalierModel[],
		idUserOwner: number,
		idStatus: number = 0,
		id: number = 0
	) {
		this.titre = titre
		this.description = description
		this.objectif = objectif
		this.compteBQ = compteBQ
		this.dateDebut = dateDebut
		this.dateFin = dateFin
		this.paliers = paliers
		this.id = id
		this.idUserOwner = idUserOwner
		this.idStatus = idStatus
	}
}