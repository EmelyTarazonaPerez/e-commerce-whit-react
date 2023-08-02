export interface AuthResponse {
    body:{
        user: User;
        accessToken: string;
        refreshToken: String;
    };
}
export interface AuthResponseError {
    body: {
        error: String;
    };
}

export interface User {
    id: string;
    nombre: string;
    correo: string;
}