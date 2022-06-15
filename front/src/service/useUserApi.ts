import { FieldValues } from 'react-hook-form';
import { defaultInstance } from './httpClient';

const resource = '/user';


const registUser = async (value: FieldValues) => {
  const addDatas = {
    userId: value.userId,
    password: value.password,
    nickname: value.nickname,
  };
  const res = await defaultInstance.post(`${resource}`, addDatas);
  return res;
};

const loginUser = async (value: FieldValues) => {
  const addDatas = {
    userId: value.userId,
    password: value.password,
  };
  const res = await defaultInstance.post(`${resource}`, addDatas);
  return res;
};


export default {
  callRegistUser: (data: FieldValues) => registUser(data),
  callLoginUser: (data: FieldValues) => loginUser(data),
};
