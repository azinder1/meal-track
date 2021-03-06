import { Component, Input, Output, EventEmitter} from '@angular/core';
import{ Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h4>Edit Meal Info:</h4>
    <label>Meal Name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Meal Details:</label>
    <input [(ngModel)]="childSelectedMeal.details">
    <label>Meal calories</label>
    <input [(ngModel)]="childSelectedMeal.calories">
    <label>Date of Meal:</label>
    <input  [(ngModel)]="childSelectedMeal.date">
    <button class='btn' (click)="doneEditing()">Update</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
