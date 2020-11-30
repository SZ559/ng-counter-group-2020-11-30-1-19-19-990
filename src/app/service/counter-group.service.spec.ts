import { TestBed } from '@angular/core/testing';

import { CounterGroupService } from './counter-group.service';

describe('CounterGroupService', () => {
  let service: CounterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should has a size of 5 when initiated', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should return sum of all counters when call sum', () => {
    // given
    let expectedSum = 0;
    service.counters.forEach(element => {
      element.account = 1;
      expectedSum += element.account;
    });
    // when
    const sum = service.sum();

    // then
    expect(sum).toBe(expectedSum);
  });

  it('should change the size of counters when reset size', () => {
    // given

    // when
    service.setSize('10');
    // then
    expect(service.counters.length).toBe(10);
  });

  it('should reset size to 0 when reset', () => {
    // given

    // when
    service.reset();
    // then
    expect(service.counters.length).toBe(0);
  });

});
