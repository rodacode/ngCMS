import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormGroupDirective, NgForm, FormBuilder,Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-backoffice-categories',
  templateUrl: './backoffice-categories.component.html',
  styleUrls: ['./backoffice-categories.component.css']
})
export class BackofficeCategoriesComponent implements OnInit {
  formCategory:FormGroup;
	categories:any;

  constructor(private dataService : DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.categories = this.dataService.getCategories();
      this.buildForm();
  }
  public buildForm(){
    this.formCategory = this.formBuilder.group({
      name:['', [Validators.required,Validators.minLength(2)]],
     
    });
    
}
public onSubmit(){

  if (this.formCategory.valid) {
    console.log(this.formCategory.value);
    this.dataService.addCategory(this.formCategory.value);
  } else {
    console.log('form is not valid, cannot save to database')

  }

}
  
}
