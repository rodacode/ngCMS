import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-backoffice-tags',
  templateUrl: './backoffice-tags.component.html',
  styleUrls: ['./backoffice-tags.component.css']
})
export class BackofficeTagsComponent implements OnInit {
  formTag;

	tags:any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.tags = this.dataService.getTags();
      this.formTag = new FormGroup({
      tag: new FormControl('')
    });
  }

}
