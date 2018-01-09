/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agent3Component } from './agent3.component';

describe('Agent3Component', () => {
  let component: Agent3Component;
  let fixture: ComponentFixture<Agent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
