import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dishes: Dish[] = DISHES;
  selectedDish!: Dish;
  dummy: Dish = DISHES[0];
  selectedDishComments!: Comment[];

  onSelect(dish: Dish){
    this.selectedDish = dish;
    this.selectedDishComments = this.selectedDish.comments;
  }
}