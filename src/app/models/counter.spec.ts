import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });
  it('should set account when create an instance', () => {
    expect(new Counter().account).toBe(0);
  });
  it('should set account when create an instance', () => {
    // given
    const account = 10;

    // when
    const result = new Counter(account);

    // then
    expect(result.account).toBe(account);
  });

  it('should increase account by one when call increase', () => {
    // given
    const result = new Counter(0);

    // when
    result.increase();

    // then
    expect(result.account).toBe(1);
  });

  it('should decrease account by one when call decrease', () => {
    // given
    const result = new Counter(0);

    // when
    result.decrease();

    // then
    expect(result.account).toBe(-1);
  });

  it('should reset counter account when click reset', () => {
    // given
    const result = new Counter(10);

    // when
    result.reset();

    // then
    expect(result.account).toBe(0);
  });
});
