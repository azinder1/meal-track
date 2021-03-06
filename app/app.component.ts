import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Calories Counter</h1>
    <div class="row">
      <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    </div>
      <div class="row">
        <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>
      </div>
      <add-meal (newAddSender)="doneAdding()" (newMealSender)="addMeal($event)" [childNewMeal]="newMeal"></add-meal>
    <button class="btn-floating btn-large waves-effect waves-light red" *ngIf="!newMeal" (click)="addMealFormShow()">Add</button>
  </div>
  `
})


export class AppComponent{
  masterMealList: Meal[] = [
    new Meal("Hamburger", "It was actually 3 hamburgers", 1000, "2016-12-09"),
    new Meal("Ice Cream", "My diet starts tomorrow", 500, "2016-12-09"),
    new Meal("Red Wine", "Pretty much a liquid fruit salad", 250, "2016-12-09")
  ]
  selectedMeal = null;
  newMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal
  }

  doneEditing() {
    this.selectedMeal = null;
  }
  addMealFormShow() {
    this.newMeal = true;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  doneAdding() {
    this.newMeal = null;
  }

}
