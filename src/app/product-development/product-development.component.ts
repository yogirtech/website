import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './product-development.component.html',
  styleUrls: ['./product-development.component.scss']
})
export class ProductDevelopmentComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello product-development');
  }

}
