export class Counter {
  public account: number = 0;
  constructor(account: number = 0)
  {
    this.account = account;
  }

  public increase(): void
  {
    this.account ++;
  }
}
