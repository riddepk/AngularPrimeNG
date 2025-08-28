export interface UserDto {
  id: number;
  username: string;
  role: string;
}

export interface UserTokenDto {
  user: UserDto;
  token: string;
}

export interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginForm {
  username: string;
  password: string;
}
