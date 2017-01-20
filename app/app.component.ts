import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Calories Counter</h1>
    <div class="row">
      <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

      <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>
    </div>
  </div>
  `
})


export class AppComponent{
  masterMealList: Meal[] = [
    new Meal("Hamburger", "It was actually 3 hamburgers", 1000),
    new Meal("Ice Cream", "My diet starts tomorrow", 500),
    new Meal("Red Wine", "Pretty much a liquid fruit salad", 250)
  ]
  selectedMeal = null;
  newMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal
    console.log(this.selectedMeal)
  }

  doneEditing() {

    this.selectedMeal = null;
  }


}
