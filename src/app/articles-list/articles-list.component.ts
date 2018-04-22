import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles:any;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.articles =  this.dataService.getArticles();

  }

}
