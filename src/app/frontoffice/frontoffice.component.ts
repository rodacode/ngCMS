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
articles: any;

  constructor(private dataService : DataService) { }

  ngOnInit(){
    this.articles=this.dataService.getArticles();
  }
 

  
}
