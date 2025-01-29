import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSorobonComponent } from './about-sorobon.component';

describe('AboutSorobonComponent', () => {
  let component: AboutSorobonComponent;
  let fixture: ComponentFixture<AboutSorobonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSorobonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSorobonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
