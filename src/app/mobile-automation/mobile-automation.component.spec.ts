// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { MobileAutomationComponent } from './mobile-automation.component';

describe('Home Component', () => {
  const html = '<my-mobile-automation></my-mobile-automation>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [MobileAutomationComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('mobile-automation Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
