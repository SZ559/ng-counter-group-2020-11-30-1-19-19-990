import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';
import { CounterGroupService } from '../service/counter-group.service';

@Component({
  selector: 'app-countergroup',
  templateUrl: './countergroup.component.html',
  styleUrls: ['./countergroup.component.css']
})
export class CountergroupComponent implements OnInit {

  public size: number = 5;
  public get counters(): Array<Counter>{
    return this.service.counters;
  }
  public service: CounterGroupService;
  constructor(service: CounterGroupService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  public sum(): number {
    return this.service.sum();
  }

  public setSize(size: string): void {
    this.service.setSize(size);
  }
}
