import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutcomesCreateComponent } from './in-outcomes-create.component';

describe('InOutcomesCreateComponent', () => {
  let component: InOutcomesCreateComponent;
  let fixture: ComponentFixture<InOutcomesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutcomesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutcomesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
