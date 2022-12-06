import { Tag } from './tag.interface';
import { Comment } from './comment.interface';

export interface Post {
  id?: number;
  type: string;
  title: string;
  announceText: string;
  text: string;
  userId: string;
  createdAt?: Date;
  publishAt?: Date;
  tags: Tag[];
  comments: Comment[];
}
