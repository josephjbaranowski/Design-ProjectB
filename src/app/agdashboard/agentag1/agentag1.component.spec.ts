/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agentag1Component } from './agentag1.component';

describe('Agentag1Component', () => {
  let component: Agentag1Component;
  let fixture: ComponentFixture<Agentag1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agentag1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agentag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
