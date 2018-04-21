import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';

import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  editState: boolean = false;
  articleToEdit: Article;
  articleDoc: AngularFirestoreDocument<Article>;
	articlesCollection: AngularFirestoreCollection<Article>;

    constructor(public db:AngularFirestore) {
    	this.articlesCollection = this.db.collection('articles', ref => ref.orderBy('title'));
    }
    	
  
  ngOnInit() {
  }
  getArticles() {
    return this.articlesCollection.snapshotChanges().map(arr => {
      return arr.map(snap => {
        const data = snap.payload.doc.data() as Article;
        const id = snap.payload.doc.id;
        return { id, ...data };
      });
    });
  };

  	getArticle(id: string) {
    return this.db.doc(`articles/${id}`).snapshotChanges().map(snap => {
      const data = snap.payload.data() as Article;
      const id = snap.payload.id;
      return { id, ...data };
    });
  }


  editArticle(event, article) {
    this.editState = !this.editState;
    this.articleToEdit = article;
  }

   addArticle(val) {
    this.db.collection('articles').add(val);
  }

  deleteArticle(article: Article) {
    this.articleDoc = this.db.doc(`articles/${article.id}`);
    this.articleDoc.delete();
  }

  updateTask(article: Article) {
    this.articleDoc = this.db.doc(`articles/${article.id}`);
    this.articleDoc.update(article);
}

}






   


