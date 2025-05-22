export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  city: string;
  role: "CLIENT" | "MASTER"; 
}

export interface SignInRequest {
  username: string;
  email: string;
  password: string;
  user_role: "CLIENT" | "MASTER";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}
