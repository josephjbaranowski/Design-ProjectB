/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License4Component } from './license4.component';

describe('License4Component', () => {
  let component: License4Component;
  let fixture: ComponentFixture<License4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
