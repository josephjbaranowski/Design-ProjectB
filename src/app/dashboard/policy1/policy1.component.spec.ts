/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Policy1Component } from './policy1.component';

describe('Policy1Component', () => {
  let component: Policy1Component;
  let fixture: ComponentFixture<Policy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Policy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
