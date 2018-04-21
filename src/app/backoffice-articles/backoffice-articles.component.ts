import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TinyEditorComponent } from '../tiny-editor/tiny-editor.component';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';


import { Article } from '../article';

@Component({
  selector: 'app-backoffice-articles',
  templateUrl: './backoffice-articles.component.html',
  styleUrls: ['./backoffice-articles.component.css']
})
export class BackofficeArticlesComponent implements OnInit {
  form;
 	articles: any;
  articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private dataService : DataService) { }

  ngOnInit(){
  	   this.dataService.getArticles().subscribe(articles => {
      //console.log(tasks);
      this.articles = articles;
    });
    
  }
  
  /*
  this.form = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl('')
  });
*/
  

  onSubmit(this.form) {
    console.log(this.form);
  }
  
}






 

