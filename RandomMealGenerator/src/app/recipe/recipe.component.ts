import { Component, Input} from '@angular/core';
import { LoadRecipesService, Recipe } from '../load-recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [LoadRecipesService]
})
export class RecipeComponent {
  @Input() selectedRecipe: Recipe;
}
