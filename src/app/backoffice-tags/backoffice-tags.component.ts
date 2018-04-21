import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-backoffice-tags',
  templateUrl: './backoffice-tags.component.html',
  styleUrls: ['./backoffice-tags.component.css']
})
export class BackofficeTagsComponent implements OnInit {
  formTag;

  tags=['nerds','code','angular','node js', 'javascript', 'typescript'];

  constructor() { }

  ngOnInit() {

      this.formTag = new FormGroup({
      tag: new FormControl('')
  });

  }

}
