import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbontronComponent } from './jumbontron.component';

describe('JumbontronComponent', () => {
  let component: JumbontronComponent;
  let fixture: ComponentFixture<JumbontronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbontronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumbontronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
