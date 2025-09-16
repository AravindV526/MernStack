// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiRequest = async (endpoint, options = {}) => {
  try {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Worker API calls
export const workersAPI = {
  getAll: () => apiRequest('/workers'),
  getById: (id) => apiRequest(`/workers/${id}`),
  create: (workerData) => apiRequest('/workers', {
    method: 'POST',
    body: JSON.stringify(workerData)
  }),
  update: (id, workerData) => apiRequest(`/workers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(workerData)
  }),
  delete: (id) => apiRequest(`/workers/${id}`, { method: 'DELETE' }),
  getBySkill: (skillId) => apiRequest(`/workers/skill/${skillId}`),
  getAvailable: () => apiRequest('/workers/status/available')
};

// Services API calls
export const servicesAPI = {
  getAll: () => apiRequest('/services'),
  getById: (id) => apiRequest(`/services/${id}`),
  create: (serviceData) => apiRequest('/services', {
    method: 'POST',
    body: JSON.stringify(serviceData)
  }),
  update: (id, serviceData) => apiRequest(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(serviceData)
  }),
  delete: (id) => apiRequest(`/services/${id}`, { method: 'DELETE' })
};

// User authentication API calls
export const authAPI = {
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  }),
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  }),
  logout: () => apiRequest('/auth/logout', { method: 'POST' }),
  getProfile: () => apiRequest('/auth/profile')
};