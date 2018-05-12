import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutcomesListComponent } from './in-outcomes-list.component';

describe('InOutcomesListComponent', () => {
  let component: InOutcomesListComponent;
  let fixture: ComponentFixture<InOutcomesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutcomesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutcomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
