import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  bookmark : Bookmark = {
    id: 1,
    url: "www.facebook.com",
    descreption: "This is a descreption",
    author: "SiroukaK SostA"
  }

  constructor() { }

  ngOnInit() {
  }

}
