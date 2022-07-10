export interface LogoutInterface{
    message: string
}

export interface UserInterface{
    fullName: String
    age?: number
    email: string
    password: string
    confirmPassword: string
}

export interface RegisterInterface {
    message: String
    data: UserInterface
}

export interface AuthenticationInterface{
    login(): String
    logout(): LogoutInterface
    register(user: UserInterface): RegisterInterface
}