import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProdutoComponent } from './app-produto.component';

describe('AppProdutoComponent', () => {
  let component: AppProdutoComponent;
  let fixture: ComponentFixture<AppProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
