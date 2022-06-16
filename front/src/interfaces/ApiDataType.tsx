export interface PostListType {
  "nickname": string;
  "id": number;
  "title": string;
  "content": string;
  "imageUrl": string;
  "likeByMe": boolean;
  "likeCount": number;
  "view_count": number;
  "createdAt": string;
  "modifiedAt": string;
  "profileImageUrl":string;
  "template": "right" | "left" | "center"
}
