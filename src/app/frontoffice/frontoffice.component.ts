import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../article';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';


@Component({
  selector: 'app-frontoffice',
  templateUrl: './frontoffice.component.html',
  styleUrls: ['./frontoffice.component.css']
})
export class FrontofficeComponent implements OnInit {
articles: AngularFirestoreCollection<Article>;

  constructor(private _dataService : DataService) { }

  ngOnInit(){
  	 this._dataService.getArticles().subscribe(articles => {
      //console.log(tasks);
      this.articles = articles;
    });

  }
 

  
}
