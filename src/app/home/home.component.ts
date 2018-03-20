import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = POSTS;
  constructor() { }

  ngOnInit() {
  }

}
