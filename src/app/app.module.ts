import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';

import { DataService } from './services/data.service';
import { BackofficeArticlesComponent } from './backoffice-articles/backoffice-articles.component';
import { BackofficeSettingsComponent } from './backoffice-settings/backoffice-settings.component';
import { BackofficeUsersComponent } from './backoffice-users/backoffice-users.component';
import { BackofficeCategoriesComponent } from './backoffice-categories/backoffice-categories.component';
import { BackofficeTagsComponent } from './backoffice-tags/backoffice-tags.component';
import { BackofficeImagesComponent } from './backoffice-images/backoffice-images.component';
import { BackofficeSeoComponent } from './backoffice-seo/backoffice-seo.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    BackofficeComponent,
    ArticlesListComponent,
    FrontofficeComponent,
    BackofficeArticlesComponent,
    BackofficeSettingsComponent,
    BackofficeUsersComponent,
    BackofficeCategoriesComponent,
    BackofficeTagsComponent,
    BackofficeImagesComponent,
    BackofficeSeoComponent,
    TinyEditorComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

