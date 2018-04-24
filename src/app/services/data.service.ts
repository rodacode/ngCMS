import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import { Category } from '../models/category';
import { Tag } from '../models/tag';


import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  editState: boolean = false;
  articleToEdit: Article;
  articleDoc: AngularFirestoreDocument<Article>;
  articlesCollection: AngularFirestoreCollection<Article>;
  categoriesCollection: AngularFirestoreCollection<Category>;
  tagsCollection: AngularFirestoreCollection<Tag>;

    constructor(public db:AngularFirestore) {
      this.articlesCollection = this.db.collection('articles', ref => ref.orderBy('title'));
      this.categoriesCollection = this.db.collection('categories', ref => ref.orderBy('name'));
      this.tagsCollection = this.db.collection('tags', ref => ref.orderBy('name'));

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

//Categories
getCategories() {
  return this.categoriesCollection.snapshotChanges().map(arr => {
    return arr.map(snap => {
      const data = snap.payload.doc.data() as Category;
      const id = snap.payload.doc.id;
      return { id, ...data };
    });
  });
};


addCategory(val) {
  this.db.collection('categories').add(val);
}

//Tags
getTags() {
  return this.tagsCollection.snapshotChanges().map(arr => {
    return arr.map(snap => {
      const data = snap.payload.doc.data() as Tag;
      const id = snap.payload.doc.id;
      return { id, ...data };
    });
  });
};


addTag(val) {
  this.db.collection('tags').add(val);
}
}




   


