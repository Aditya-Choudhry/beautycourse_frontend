
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://0.0.0.0:5000/api';

export const auth = {
  login: (email, password) => axios.post(`${API_URL}/auth/login`, { email, password }),
  register: (userData) => axios.post(`${API_URL}/auth/register`, userData),
  getProfile: (token) => axios.get(`${API_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
};

export const admin = {
  getUsers: (token) => axios.get(`${API_URL}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
  getLeads: (token) => axios.get(`${API_URL}/admin/leads`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
  getProviders: (token) => axios.get(`${API_URL}/admin/providers`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
  getSubscriptions: (token) => axios.get(`${API_URL}/admin/subscriptions`, {
    headers: { Authorization: `Bearer ${token}` }
  })
};

export const user = {
  getLeads: (token) => axios.get(`${API_URL}/users/leads`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
  getSubscriptions: (token) => axios.get(`${API_URL}/users/subscriptions`, {
    headers: { Authorization: `Bearer ${token}` }
  }),
  updateProfile: (token, data) => axios.put(`${API_URL}/users/profile`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
};
