import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {
  public size: number = 5;
  public counters: Array<Counter>;

  constructor() {
    this.counters = [];
    this.generateCounters();
  }

  public sum(): number {
    return this.counters.reduce((result, count) => {
      return result + count.account;
    }, 0);
  }

  public setSize(size: string): void {
    this.size = +size;
    this.counters = [];
    this.generateCounters();
  }

  public reset(): void {
    this.setSize('0');
  }

  private generateCounters(): void {
    for (let step = 0; step < this.size; step++)
    {
      this.counters.push(new Counter());
    }
  }
}
