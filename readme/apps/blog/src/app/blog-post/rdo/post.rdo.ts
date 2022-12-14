import { Expose } from 'class-transformer';
import { Tag, Comment} from '@readme/shared-types';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public announceText: string;

  @Expose()
  public text: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;

  @Expose()
  public tags: Tag[];

  @Expose()
  public comments: Comment[]
}
