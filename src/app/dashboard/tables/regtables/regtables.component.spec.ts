/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegtablesComponent } from './regtables.component';

describe('RegtablesComponent', () => {
  let component: RegtablesComponent;
  let fixture: ComponentFixture<RegtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
