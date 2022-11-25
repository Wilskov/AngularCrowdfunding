export class ConnectedUsermodel {
    id: number
    nickname: string
    email: string
    token: string
    role: string

    constructor(
        id: number,
        nickname: string,
        email: string,
        token: string,
        role: string
    ) {
        this.id = id
        this.nickname = nickname
        this.email = email
        this.token = token
        this.role = role
    }
}