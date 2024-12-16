// export interface User {
//   id: string;
//   email: string;
//   name: string;
//   password?: string;
// }

// export interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
// }

// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface RegisterCredentials extends LoginCredentials {
//   name: string;
// }

export interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  profilePicture?: string;
  password?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}