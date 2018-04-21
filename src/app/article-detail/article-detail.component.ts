import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../article';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
 	articleSelected: Observable<Article>;
  articleDoc:any;


  constructor(private dataService : DataService, private route: ActivatedRoute) { }

 ngOnInit() {
       this.articleDoc = this.route.params
      .switchMap(param => this.dataService.getArticle(param.id));
  }

}