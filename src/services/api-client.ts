
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class ApiError extends Error {
  status: number;
  
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }

  // Handle empty responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestInit) => 
    request<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, data: unknown, options?: RequestInit) => 
    request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(data) }),
    
  put: <T>(endpoint: string, data: unknown, options?: RequestInit) => 
    request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(data) }),
    
  patch: <T>(endpoint: string, data: unknown, options?: RequestInit) => 
    request<T>(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(data) }),
    
  delete: <T>(endpoint: string, options?: RequestInit) => 
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};
