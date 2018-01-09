/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License1Component } from './license1.component';

describe('License1Component', () => {
  let component: License1Component;
  let fixture: ComponentFixture<License1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
