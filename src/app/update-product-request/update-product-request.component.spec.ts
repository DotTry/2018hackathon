import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductRequestComponent } from './update-product-request.component';

describe('UpdateProductRequestComponent', () => {
  let component: UpdateProductRequestComponent;
  let fixture: ComponentFixture<UpdateProductRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
