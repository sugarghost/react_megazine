import { FieldValues } from 'react-hook-form';
import { defaultInstance } from './httpClient';

const registUser = async (value: FieldValues) => {
  const postDatas = {
    email: value.email,
    password: value.password,
    nickname: value.nickname,
    name: value.nickname,
  };
  const res = await defaultInstance.post(`/register`, postDatas);
  return res;
};

const loginUser = async (value: FieldValues) => {
  const res = await defaultInstance.post(`/login`,
      {email: value.email, password: value.password});
  return res;
};


export default {
  callRegistUser: (data: FieldValues) => registUser(data),
  callLoginUser: (data: FieldValues) => loginUser(data),
};
