import axios from 'axios';
import {AuthResponse} from '../types/auth';

const API = 'http://localhost:8084/api/v1/auth';

export const refreshToken = async (): Promise<AuthResponse> => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post<AuthResponse>(`${API}/refresh-token`, { 
      refreshToken 
    });
    
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (error) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    throw error;
  }
};
