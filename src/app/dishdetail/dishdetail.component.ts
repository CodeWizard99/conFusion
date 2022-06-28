import { Component, Input, OnInit } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  dish!: Dish;

}
