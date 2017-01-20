import { Component, Input, Output, EventEmitter } from '@angular/core';
import{ Meal } from './meal.model'

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class="input-field col s3">
      <select class="drop-down" (change)="onChange($event.target.value)" >
        <option value="" disabled selected>Choose your option</option>
        <option value="all">All meals</option>
        <option value="lightMeal">Light Meals</option>
        <option value="heavyMeal">Heavy Meals</option>
      </select>
    </div>
  </div>
  <br>
  <div *ngFor = 'let currentMeal of childMealList | caloriefilter:filterByCalorie'>
    <div class="col s4 meals card">
      <div class='card blue-grey darken-1'>
        <div class="card-content white-text">
          <span class="card-title">{{currentMeal.name}}</span>
          <hr>
          <ul>
            <li>{{currentMeal.details}}</li>
            <li>{{currentMeal.calories}}</li>
          </ul>
          <button class="btn waves-effect waves-light" (click)='editMeal(currentMeal)'>Edit Meal!</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalorie: string = "allMeals"

  onChange(optionFromMenu) {
    this.filterByCalorie = optionFromMenu
  }

  editMeal(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit)
  }
}
