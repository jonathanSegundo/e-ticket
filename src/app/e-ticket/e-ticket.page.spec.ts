import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETicketPage } from './e-ticket.page';

describe('ETicketPage', () => {
  let component: ETicketPage;
  let fixture: ComponentFixture<ETicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETicketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
