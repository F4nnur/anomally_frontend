export interface User {
    access_token: string;
    refresh_token: string;
}

export interface UserSchema {
    authData?: User
}
