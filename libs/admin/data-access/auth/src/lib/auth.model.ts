export interface AuthLoginRequest {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  token: string;
  refresh_token: string;
}

export interface AuthProfile {
  name: string;
  username: string;
  role: string;
}
