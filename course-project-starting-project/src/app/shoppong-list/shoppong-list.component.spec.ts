import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppongListComponent } from './shoppong-list.component';

describe('ShoppongListComponent', () => {
  let component: ShoppongListComponent;
  let fixture: ComponentFixture<ShoppongListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppongListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
