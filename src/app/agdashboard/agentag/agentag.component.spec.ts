/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgentagComponent } from './agentag.component';

describe('AgentagComponent', () => {
  let component: AgentagComponent;
  let fixture: ComponentFixture<AgentagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
