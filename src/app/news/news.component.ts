import { Component, OnInit } from '@angular/core';
import {news} from "../news"

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any=news;
  constructor() { }

  ngOnInit(): void {
  }

}
