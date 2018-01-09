/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agent4Component } from './agent4.component';

describe('Agent4Component', () => {
  let component: Agent4Component;
  let fixture: ComponentFixture<Agent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
