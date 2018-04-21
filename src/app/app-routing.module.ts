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
  {
    path: '',
    component: FrontofficeComponent
  },
  { path: 'articles/:id', component: ArticleDetailComponent },
  
  { path: 'admin', component: BackofficeComponent, children:[
    {path: 'articles', component: BackofficeArticlesComponent, outlet:'back-roulet'},
  	{path: 'categories', component: BackofficeCategoriesComponent, outlet:'back-roulet'},
    {path: 'tags', component: BackofficeTagsComponent, outlet:'back-roulet'},
    {path: 'images', component: BackofficeImagesComponent, outlet:'back-roulet'},
    {path: 'seo', component: BackofficeSeoComponent, outlet:'back-roulet'},
  	{path: 'users', component: BackofficeUsersComponent, outlet:'back-roulet'},
  	{path: 'settings', component: BackofficeSettingsComponent, outlet:'back-roulet'}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
