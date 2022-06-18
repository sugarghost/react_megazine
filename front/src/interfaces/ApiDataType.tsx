export interface PostListType {
  "nickname": string;
  "id": number;
  "title": string;
  "content": string;
  "imageUrl": string;
  "likeByMe": boolean;
  "likeCount": number;
  "view_count": number;
  "createdAt": Date;
  "modifiedAt": Date;
  "profileImageUrl":string;
  "template": "Right" | "Left" | "Center"}
