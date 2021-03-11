import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../post';
import { POSTS } from './mock-posts';
import { DatePipe } from '@angular/common';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: Post[];
  selectedPost?: Post | undefined;
  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  getPosts(): void {
    this.posts = this.postsService.getPosts();
  }
  ngOnInit(): void {
    this.getPosts();
  }

  goBack(): void {
    this.selectedPost = undefined;
  }
}
