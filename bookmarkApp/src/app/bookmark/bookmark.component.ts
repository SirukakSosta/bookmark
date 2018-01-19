import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BOOKMARKS } from '../bookmarks';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  bookmarks = BOOKMARKS;

  selectedBookmark: Bookmark;



  constructor() { }

  ngOnInit() {
  }

  onSelect(bookmark: Bookmark): void{
    this.selectedBookmark = bookmark;
  }
}
