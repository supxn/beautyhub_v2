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

export type SignInRequest = 
  | { username: string; password: string }
  | { email: string; password: string };

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}
