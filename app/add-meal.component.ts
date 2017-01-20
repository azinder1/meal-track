import { Component, Output, Input, EventEmitter } from '@angular/core';
import{ Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
  <div *ngIf="childNewMeal" class="meals add-form">
    <h4>Add Meal Info:</h4>
    <label>Enter meal name:</label>
    <input #newName>
    <label>Meal details:</label>
    <input #newDetails>
    <label>Meal calories:</label>
    <input #newCalories>
    <button class="btn-floating btn-medium waves-effect waves-light red" (click)="submitForm(newName.value, newDetails.value, newCalories.value); doneAdding()">Add Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Input() childNewMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  @Output() newAddSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMeal);
  }
  doneAdding() {
    this.newAddSender.emit();
  }
}
