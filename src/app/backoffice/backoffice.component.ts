import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Article } from '../article';


@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

	articles:any;


  constructor(private dataService : DataService) { }

  ngOnInit(){
  	this.articles= this.articles=this.dataService.getArticles();     
  }

}
