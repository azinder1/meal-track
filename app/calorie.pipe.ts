import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from './meal.model';

@Pipe({
  name: "caloriefilter",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], mealCalorie) {
    console.log(mealCalorie)
    var output: Meal[] = [];
    if (mealCalorie ==="lightMeal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (mealCalorie === "heavyMeal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
