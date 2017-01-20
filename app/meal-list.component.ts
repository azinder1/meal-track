import { Component, Input, Output, EventEmitter } from '@angular/core';
import{ Meal } from './meal.model'

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor = 'let currentMeal of childMealList'>
    <div class="col s4 meals">
      <div class='panel'>
        <h4>{{currentMeal.name}}</h4>
        <hr>
        <ul>
          <li>{{currentMeal.details}}</li>
          <li>{{currentMeal.calories}}</li>
        </ul>
      </div>
      <button class="btn waves-effect waves-light" (click)='editMeal(currentMeal)'>Edit Meal!</button>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editMeal(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit)
  }
}
