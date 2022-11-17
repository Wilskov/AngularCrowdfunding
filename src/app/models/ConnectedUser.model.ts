export class ConnectedUsermodel {
    id: number
    nickname: string
    email: string
    token: string

    constructor(
        id: number,
        nickname: string,
        email: string,
        token: string
    ) {
        this.id = id
        this.nickname = nickname
        this.email = email
        this.token = token
    }
}