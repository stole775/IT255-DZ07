import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreporukaComponent } from './preporuka.component';

describe('PreporukaComponent', () => {
  let component: PreporukaComponent;
  let fixture: ComponentFixture<PreporukaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreporukaComponent]
    });
    fixture = TestBed.createComponent(PreporukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
