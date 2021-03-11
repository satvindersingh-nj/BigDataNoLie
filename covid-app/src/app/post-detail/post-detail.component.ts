import { Component, Input, OnInit } from '@angular/core';
import { Post, Comment } from '../post';
import { POSTS } from '../post-list/mock-posts';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  @Input() post?: Post;

  constructor() {}

  ngOnInit(): void {}


}
