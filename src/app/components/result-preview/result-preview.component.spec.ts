import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPreviewComponent } from './result-preview.component';

describe('ResultPreviewComponent', () => {
  let component: ResultPreviewComponent;
  let fixture: ComponentFixture<ResultPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
