import axios from 'axios';
import {SignInRequest, SignUpRequest, AuthResponse} from './types/auth';

const API = 'http://localhost:8084/api/v1/auth';

export const signUp = async (data: SignUpRequest): Promise<void> => {
  try {
    await axios.post(`${API}/sign-up`, data);
    // Можно добавить автоматический вход после регистрации
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

export const signIn = async (data: SignInRequest): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${API}/sign-in`, data);
    const { accessToken, refreshToken } = response.data;
    
    // Сохраняем токены (рассмотрите более безопасные способы хранения)
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    
    return response.data;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

// Добавим интерцептор для автоматической подстановки токена
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Обработчик ошибок
const handleAuthError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || 'Auth error';
    throw new Error(message);
  }
  throw new Error('Unknown error occurred');
};
