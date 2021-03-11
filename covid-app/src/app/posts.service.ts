import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './post-list/mock-posts';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts(): Post[] {
    return POSTS;
  }
}
