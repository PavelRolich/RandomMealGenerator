import { Component, ViewChild } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RandomMealGenerator';
  viewRecipe: boolean = false;
  numRecipe: number = 3;

  showRecipe(): void {
    this.viewRecipe = true;
    while (this.numRecipe > 2) {
      this.numRecipe = Math.floor(Math.random() * 3 + 1);
    }
  }
}
