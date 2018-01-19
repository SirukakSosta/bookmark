import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { TAGS } from '../tags';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {


  tags = TAGS;

  constructor() { }

  ngOnInit() {
  }

}
