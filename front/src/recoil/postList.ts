
import {atom} from "recoil";
import {PostListType} from "../interfaces/ApiDataType";

// TodoInput에서 입력하는 값을 atom으로 관리하는 방식
export const inputState = atom<string>({
  key: 'inputState',
  // key의 값은 항상 고유값이어야 합니다.

  default: '',
});

// 업데이트 시킬 Todos atom 배열
export const postListState = atom<PostListType[]>({
  key: 'postList',
  // default에는 임의의 데이터를 넣어줍시다.
  default: [
    {
      "nickname": "name",
      "post_id": 0,
      "title": "title",
      "content": "content",
      "image_url": "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg",
      "like_by_me": true,
      "like_count": 10,
      "view_count": 15,
      "created_at": "date",
      "modified_at": "date",
      "template": "center"
    },
  ],
});
