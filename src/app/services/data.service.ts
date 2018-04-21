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
	articlesCollection: AngularFirestoreCollection<Article>;

    constructor(public afs:AngularFirestore) {
    	this.articlesCollection = this.afs.collection('articles', ref => ref.orderBy('title'));
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

/*
	getArticles(){
    	return this.articles;
        
	}
*/
  	getArticle(id: string) {
    return this.afs.doc(`articles/${id}`).snapshotChanges().map(snap => {
      const data = snap.payload.data() as Article;
      const id = snap.payload.id;
      return { id, ...data };
    });
  }

}






   


