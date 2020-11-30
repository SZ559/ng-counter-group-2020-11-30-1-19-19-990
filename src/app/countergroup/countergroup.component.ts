import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-countergroup',
  templateUrl: './countergroup.component.html',
  styleUrls: ['./countergroup.component.css']
})
export class CountergroupComponent implements OnInit {

  public size: number = 5;
  public counters: Array<Counter> = [];
  constructor() { }

  ngOnInit(): void {
    for (let step = 0; step < this.size; step++)
    {
      this.counters.push(new Counter());
    }
  }

  public sum(): number {
    return this.counters.reduce((result, count) => {
      return result + count.account;
    }, 0);
  }
}
