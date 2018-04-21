import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-backoffice-categories',
  templateUrl: './backoffice-categories.component.html',
  styleUrls: ['./backoffice-categories.component.css']
})
export class BackofficeCategoriesComponent implements OnInit {
  formCategory;

	categories=['dev','mac','angular','node js'];

  constructor() { }

  ngOnInit() {

      this.formCategory = new FormGroup({
      category: new FormControl('')
    });

  }

}
