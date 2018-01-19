import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {







  tag : Tag = {
    id: 1,
    name: "codepen"
  }

  constructor() { }

  ngOnInit() {
  }

}
