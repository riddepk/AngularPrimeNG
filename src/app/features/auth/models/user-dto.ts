//------------------------ ce qui doit etre affiché
export interface UserDto {
  id: number;
  username: string;
  role: string;
}

// ----------- identifiants
export interface UserTokenDto {
  //username: string;
  user: UserDto;
  token: string;
}

// ---------- Page d'enregistrement
export interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}
// ---------- Page de Login
export interface LoginForm {
  username: string;
  password: string;
}
