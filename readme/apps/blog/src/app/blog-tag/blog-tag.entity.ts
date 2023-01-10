import { Tag } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogTagEntity implements Entity<BlogTagEntity>, Tag {
  public id: number;
  public title: string;

  constructor(tag: Tag) {
    this.fillEntity(tag);
  }

  public fillEntity(entity: Tag) {
    this.title = entity.title;
    this.id = entity.id;
  }

  public toObject(): BlogTagEntity {
    return { ...this }
  }
}
