import { Component } from '@angular/core';

import { ApiService } from './shared';

const $ = require('jquery');

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  toggleMobile(e) {
    e.preventDefault();
    $('header > nav').slideToggle('medium');
    $('#logo').toggleClass('menuUp menuDown');
  }

  toggleSubMenuMobile() {
    if (<any>window.innerWidth <= '767') {
      $('#sub-menu').toggleClass('show-mobile-sub-menu');
      $('#expand').children('.toggle').html($('#expand').children('.toggle').html() === 'close' ? 'expand' : 'close');
    }
  }
}
