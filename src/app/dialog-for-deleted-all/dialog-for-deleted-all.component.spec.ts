import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForDeletedAllComponent } from './dialog-for-deleted-all.component';

describe('DialogForDeletedAllComponent', () => {
  let component: DialogForDeletedAllComponent;
  let fixture: ComponentFixture<DialogForDeletedAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForDeletedAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogForDeletedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
