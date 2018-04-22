import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-backoffice-categories',
  templateUrl: './backoffice-categories.component.html',
  styleUrls: ['./backoffice-categories.component.css']
})
export class BackofficeCategoriesComponent implements OnInit {
  formCategory;

	categories:any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.categories = this.dataService.getCategories();
      this.formCategory = new FormGroup({
      category: new FormControl('')
    });

  }

}
