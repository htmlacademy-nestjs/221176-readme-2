import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BlogPostModule, BlogTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
