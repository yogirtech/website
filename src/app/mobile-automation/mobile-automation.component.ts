import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-mobile-automation',
  templateUrl: './mobile-automation.component.html',
  styleUrls: ['./mobile-automation.component.scss']
})
export class MobileAutomationComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello MobileSupport');
  }

}
