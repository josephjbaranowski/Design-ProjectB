/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License3Component } from './license3.component';

describe('License3Component', () => {
  let component: License3Component;
  let fixture: ComponentFixture<License3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
