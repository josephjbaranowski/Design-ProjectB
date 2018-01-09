/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License6Component } from './license6.component';

describe('License6Component', () => {
  let component: License6Component;
  let fixture: ComponentFixture<License6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
