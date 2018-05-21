import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductRequestComponent } from './create-product-request.component';

describe('CreateProductRequestComponent', () => {
  let component: CreateProductRequestComponent;
  let fixture: ComponentFixture<CreateProductRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
