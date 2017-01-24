import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './add-meal.component';
import { CaloriePipe } from './calorie.pipe';
import { DatePipe } from './date.pipe'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MealListComponent, EditMealComponent, NewMealComponent, CaloriePipe, DatePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
