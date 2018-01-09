/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgfooterComponent } from './agfooter.component';

describe('AgfooterComponent', () => {
  let component: AgfooterComponent;
  let fixture: ComponentFixture<AgfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
