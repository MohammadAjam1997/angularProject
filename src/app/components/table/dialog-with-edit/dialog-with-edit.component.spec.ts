import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithEditComponent } from './dialog-with-edit.component';

describe('DialogWithEditComponent', () => {
  let component: DialogWithEditComponent;
  let fixture: ComponentFixture<DialogWithEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWithEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
