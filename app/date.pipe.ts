import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from './meal.model';

@Pipe({
  name: "datefilter",
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(input: Meal[], mealDate) {
    for (var i = 0; i < input.length; i++) {

    }
  }
}
