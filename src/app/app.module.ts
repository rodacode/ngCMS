import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

//environment

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

// Firestore

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Routing

import { AppRoutingModule } from './app-routing.module';

//Services

import { DataService } from './services/data.service';

//Components
import { AppComponent } from './app.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeArticlesComponent } from './backoffice-articles/backoffice-articles.component';
import { BackofficeSettingsComponent } from './backoffice-settings/backoffice-settings.component';
import { BackofficeUsersComponent } from './backoffice-users/backoffice-users.component';
import { BackofficeCategoriesComponent } from './backoffice-categories/backoffice-categories.component';
import { BackofficeTagsComponent } from './backoffice-tags/backoffice-tags.component';
import { BackofficeImagesComponent } from './backoffice-images/backoffice-images.component';
import { BackofficeSeoComponent } from './backoffice-seo/backoffice-seo.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


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
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
	  MatListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
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

