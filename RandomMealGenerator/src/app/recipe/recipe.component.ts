import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { LoadRecipesService, Recipe } from '../load-recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [LoadRecipesService]
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipesList: Recipe[];
  selectedRecipe: Recipe;
  subscription: Subscription;
  @Input() randomNum: number;

  constructor(private loadRecipesService: LoadRecipesService) { }

  getRecipes(): void {
    this.subscription = this.loadRecipesService.getRecipes().subscribe(result => {
      this.recipesList = result;
    });
  }

  selectRecipe(): void {
    this.selectedRecipe = this.recipesList[this.randomNum];
  }

  ngOnInit() {
    this.getRecipes();
    this.selectRecipe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
