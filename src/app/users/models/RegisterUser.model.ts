export class RegisterUserModel {

    email: string
    password: string
    nickname: string
    birtDay: Date
    role: number

    constructor(
        email: string,
        password: string,
        nickname: string,
        birtDay: Date,
        role: number
    ) {
        this.email = email
        this.password = password
        this.nickname = nickname
        this.birtDay = birtDay
        this.role = role
    }

}