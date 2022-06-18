import {FieldValues} from "react-hook-form";
import {authInstance} from './httpClient';

const resource = '/posts';

export default {
  get() {
    return authInstance.get(resource).then((res) => res.data);
  },
  async post(payload: object) {
    const res = await authInstance.post(`${resource}`, payload,
      {headers: {'Content-Type': 'multipart/form-data'}}
    );
    return res
  },
  async modifyPost(payload: FieldValues) {
    console.log("payload is ", payload, `${resource}/${payload}`)
    const res = await authInstance.put(`${resource}/${payload.postId}`, payload,
      {headers: {'Content-Type': 'multipart/form-data'}}
    );
    return res
  },
  async likePost(payload:any) {
    const res = await authInstance.post(`${resource}/${payload}/like`
    );
    return res
  },
  async delete(payload:any) {
    const res = await authInstance.delete(`${resource}/${payload}`
    );
    return res
  },
};
