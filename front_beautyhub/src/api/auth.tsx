import axios from 'axios';
import { SignInRequest, SignUpRequest, AuthResponse } from "../types/auth";

const API = 'http://localhost:8084/api/v1/auth';

export const signUp = async (data: SignUpRequest): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>(`${API}/sign-up`, data);
  return res.data;
};

export const signIn = async (data: SignInRequest): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>(`${API}/sign-in`, data);
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export const getHello = async (): Promise<string> => {
  const token = localStorage.getItem('token');
  const res = await axios.get(`${API}/hello`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
