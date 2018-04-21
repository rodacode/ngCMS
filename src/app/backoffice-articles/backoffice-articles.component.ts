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
 	articles: AngularFirestoreCollection<Article[]>;
  articlesCollection: AngularFirestoreCollection<Article>;

  editState: boolean = false;
  articleToEdit: Article;
  articleDoc: AngularFirestoreDocument<Article>;

  constructor(private _dataService : DataService) { }

  ngOnInit(){
  	   this._dataService.getArticles().subscribe(articles => {
      //console.log(tasks);
      this.articles = articles;
    });
    
      
      this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      tags: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl('')
    });

  }


  onSubmit(articleInfo) {
    console.log(articleInfo);
  }

 

  editArticle(event, article) {
    this.editState = !this.editState;
    this.articleToEdit = article;
  }

   addArticle(article: Article) {
    this.articlesCollection.add(article);
  }

  deleteArticle(article: Article) {
    this.articleDoc = this.afs.doc(`articles/${article.id}`);
    this.articleDoc.delete();
  }

  updateTask(article: Article) {
    this.articleDoc = this.afs.doc(`articles/${article.id}`);
    this.articleDoc.update(article);
}

  

}






 

