/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Policy3Component } from './policy3.component';

describe('Policy3Component', () => {
  let component: Policy3Component;
  let fixture: ComponentFixture<Policy3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Policy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
