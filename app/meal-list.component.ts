import { Component, Input, Output, EventEmitter } from '@angular/core';
import{ Meal } from './meal.model'

@Component({
  selector: 'meal-list',
  template: `
  <h1>Hello World</h1>
  <div class="form-control">
    <select (change)="onChange($event.taget.value)">
      <option value="lightMeal">Light Meals</option>
      <option value="heavyMeal">Heavy Meals</option>
    </select>
  </div>

  <div *ngFor = 'let currentMeal of childMealList | caloriefilter:filerByCalorie'>
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

  filterByCalorie: string = "allMeals"

  onChange(optionFromMenu) {
    this.filterByCalorie = optionFromMenu
  }

  editMeal(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit)
  }
}
