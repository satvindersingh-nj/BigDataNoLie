export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  dateTime: string;
  userName: string;
  comments?: Comment[];
}

export interface Comment {
  comment: string;
}
