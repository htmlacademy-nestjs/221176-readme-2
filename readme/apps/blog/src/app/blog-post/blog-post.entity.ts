import { Tag, Post, Comment } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogPostEntity implements Entity<BlogPostEntity>, Post {
  public id: number;
  public type: string;
  public title: string;
  public announceText: string;
  public text: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public tags: Tag[];
  public createdAt: Date;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity(entity: Post): void {
    this.type = entity.type;
    this.title = entity.title;
    this.announceText = entity.announceText;
    this.text = entity.text;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.tags = [...entity.tags];
    this.createdAt = new Date();
  }

  public toObject(): BlogPostEntity {
    return {
      ...this,
      categories: this.tags.map(({id}) => ({ id })),
      comments: this.comments.map(({id}) => ({id}))
    };
  }

}
