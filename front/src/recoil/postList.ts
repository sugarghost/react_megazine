
import {atom} from "recoil";
import {PostListType} from "../interfaces/ApiDataType";

// 업데이트 시킬 Todos atom 배열
// eslint-disable-next-line import/prefer-default-export
export const postListState = atom<PostListType[]>({
  key: 'postList',
  // default에는 임의의 데이터를 넣어줍시다.
  default: [
    {
      "id": 0,
      "nickname": "name",
      "email": "test@test.com",
      "title": "title",
      "content": "content",
      "imageUrl": "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg",
      "likeByMe": true,
      "likeCount": 10,
      "view_count": 15,
      "createdAt":new Date(),
      "modifiedAt": new Date(),
      "template": "Center",
      "profileImageUrl":"",
    },
  ],
});
