import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';
import { Post } from '../post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = POSTS;
  constructor() { }

  ngOnInit() {
  }

}
