import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardPage } from './idcard.page';

describe('IdcardPage', () => {
  let component: IdcardPage;
  let fixture: ComponentFixture<IdcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
