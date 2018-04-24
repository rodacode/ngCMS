import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormGroupDirective, NgForm, FormBuilder,Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-backoffice-tags',
  templateUrl: './backoffice-tags.component.html',
  styleUrls: ['./backoffice-tags.component.css']
})
export class BackofficeTagsComponent implements OnInit {
  formTag:FormGroup;

	tags:any;

  constructor(private dataService:DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.tags = this.dataService.getTags();
      this.buildForm();
  }
  public buildForm(){
    this.formTag = this.formBuilder.group({
      name:['', [Validators.required,Validators.minLength(2)]],
     
    });
    
}
public onSubmit(){

  if (this.formTag.valid) {
    console.log(this.formTag.value);
    this.dataService.addTag(this.formTag.value);
  } else {
    console.log('form is not valid, cannot save to database')

  }

}
  
}