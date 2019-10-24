import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadRecipesService {

  apiHost = '../assets/recipes.json';
  recipes: Observable<Recipe[]>;

  constructor(private http: HttpClient) {
    this.recipes = this.http.get(this.apiHost)
      .pipe(map((rp: Recipe[]) => rp));
   }

  getRecipes(): Observable<Recipe[]> {
    return this.recipes;
  }
}

export interface Recipe {
  recipeName: string;
  recipeCategory: {
    category: string;
    area: string;
    tags: string;
  };
  recipeIngredients: [];
  recipeCooking: string;
  recipeImgURL: string;
}
