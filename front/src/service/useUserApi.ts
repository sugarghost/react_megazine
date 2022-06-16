import { FieldValues } from 'react-hook-form';
import { defaultInstance } from './httpClient';

const resourceUser = '/user';
const resourceLogin = '/login';


const registUser = async (value: FieldValues) => {
  const addDatas = {
    userId: value.userId,
    password: value.password,
    nickname: value.nickname,
  };
  const res = await defaultInstance.post(`${resourceUser}`, addDatas);
  return res;
};

const loginUser = async (value: FieldValues) => {
  const res = await defaultInstance.get(`${resourceLogin}`,
      {params: {userId: value.userId, password: value.password}});
  return res;
};


export default {
  callRegistUser: (data: FieldValues) => registUser(data),
  callLoginUser: (data: FieldValues) => loginUser(data),
};
