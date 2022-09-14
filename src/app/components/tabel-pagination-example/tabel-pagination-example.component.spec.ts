import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelPaginationExampleComponent } from './tabel-pagination-example.component';

describe('TabelPaginationExampleComponent', () => {
  let component: TabelPaginationExampleComponent;
  let fixture: ComponentFixture<TabelPaginationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelPaginationExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelPaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
