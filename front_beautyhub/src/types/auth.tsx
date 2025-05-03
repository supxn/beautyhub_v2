//это писал гпт

export interface SignUpRequest {
    email: string;
    password: string;
    username?: string; // если есть
  }
  
  export interface SignInRequest {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
  }
  