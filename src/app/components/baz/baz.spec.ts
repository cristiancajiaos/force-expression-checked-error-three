import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baz } from './baz';

describe('Baz', () => {
  let component: Baz;
  let fixture: ComponentFixture<Baz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
