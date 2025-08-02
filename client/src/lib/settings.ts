import { api } from './api';

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  isPremium: boolean;
}

// Get user profile
export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await api.get('/settings/profile');
  return response.data;
};

// Update user profile
export const updateUserProfile = async (data: { name?: string; email?: string }): Promise<UserProfile> => {
  const response = await api.put('/settings/profile', data);
  return response.data;
}; 