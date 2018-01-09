/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { License5Component } from './license5.component';

describe('License5Component', () => {
  let component: License5Component;
  let fixture: ComponentFixture<License5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ License5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(License5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
