/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License2Component } from './license2.component';

describe('License2Component', () => {
  let component: License2Component;
  let fixture: ComponentFixture<License2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
