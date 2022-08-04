import { request } from 'umi';

export interface StateType {
  status?: 'success' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  mail: string;
  password: string;
  confirm: string;
  mobile: string;
  captcha: string;
  prefix: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request(window.antdprourl + '/api/register', {
    method: 'POST',
    data: params,
  });
}