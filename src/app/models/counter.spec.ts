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
});
