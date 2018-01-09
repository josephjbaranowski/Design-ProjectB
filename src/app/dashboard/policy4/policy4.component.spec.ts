/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Policy4Component } from './policy4.component';

describe('Policy4Component', () => {
  let component: Policy4Component;
  let fixture: ComponentFixture<Policy4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Policy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
