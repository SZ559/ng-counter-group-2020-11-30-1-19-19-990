import { Counter } from './../models/counter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountergroupComponent } from './countergroup.component';
import { CounterComponent } from '../counter/counter.component';

describe('CountergroupComponent', () => {
  let component: CountergroupComponent;
  let fixture: ComponentFixture<CountergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountergroupComponent, CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a size of 5 when initiated', () => {
    expect(component.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(component.counters.length).toBe(component.size);
  });
});
