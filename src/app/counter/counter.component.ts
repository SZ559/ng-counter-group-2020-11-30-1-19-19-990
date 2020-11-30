import { Counter } from './../models/counter';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  public get account(): number {
    return this.counter.account;
  }

  @Input() public counter!: Counter;
  // constructor() {
  //   //this.counter = new Counter();
  // }

  ngOnInit(): void {

  }

  public increase(): void {
    this.counter.increase();
  }

  public decrease(): void {
    this.counter.decrease();
  }
}
