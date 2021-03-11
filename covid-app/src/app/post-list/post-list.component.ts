import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../post';
import { POSTS } from './mock-posts';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor() {}

  posts: Post[] = POSTS;
  ngOnInit(): void {}
}
