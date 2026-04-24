export interface User {
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}