export interface PostListType {
  "nickname": string;
  "post_id": number;
  "title": string;
  "content": string;
  "image_url": string;
  "like_by_me": boolean;
  "like_count": number;
  "view_count": number;
  "created_at": string;
  "modified_at": string;
  "template": "right" | "left" | "center"
}
