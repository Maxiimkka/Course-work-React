import { Action } from 'redux';

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserAction extends Action<'REGISTER_USER'> {
  payload: User;
}

export const registerUser = (user: User): RegisterUserAction => {
  return {
    type: 'REGISTER_USER',
    payload: user,
  };
};