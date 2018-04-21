import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BackofficeArticlesComponent } from './backoffice-articles/backoffice-articles.component';
import { BackofficeSettingsComponent } from './backoffice-settings/backoffice-settings.component';
import { BackofficeUsersComponent } from './backoffice-users/backoffice-users.component';
import { BackofficeCategoriesComponent } from './backoffice-categories/backoffice-categories.component';
import { BackofficeTagsComponent } from './backoffice-tags/backoffice-tags.component';
import { BackofficeImagesComponent } from './backoffice-images/backoffice-images.component';
import { BackofficeSeoComponent } from './backoffice-seo/backoffice-seo.component';


const routes: Routes = [
  { path: '', component: FrontofficeComponent, pathMatch: 'full'},
  { path: 'articles/:id', component: ArticleDetailComponent },


  { path: 'admin', component: BackofficeComponent, children:[
    {path: 'articles', component: BackofficeArticlesComponent, pathMatch: 'full'},
  	{path: 'categories', component: BackofficeCategoriesComponent},
    {path: 'tags', component: BackofficeTagsComponent},
    {path: 'images', component: BackofficeImagesComponent},
    {path: 'seo', component: BackofficeSeoComponent},
  	{path: 'users', component: BackofficeUsersComponent},
  	{path: 'settings', component: BackofficeSettingsComponent}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

