import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Article } from '../article';


@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

	articles: Article[];


  constructor(private _dataService : DataService) { }

  ngOnInit(){
  	  this.getArticles();
      

  }

    handleSuccessNews(data){
    this.articles = data;
    console.log(this.articles);	  
  }
  handleErrorNews(error){
    console.log(error);
  }
  getArticles(){
    return this._dataService.getArticles().subscribe(
    data => this.handleSuccessNews(data),
    error => this.handleErrorNews(error)
    )
  }

}
