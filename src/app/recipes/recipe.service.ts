import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A test recipe', 'this is simply a test ', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('A new recipe', 'this is simply a roasted chicken ', 
        'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18151639/051060080-juicy-roast-turkey-recipe-main.jpg'),
    
      ];
    getRecipes(){
        return this.recipes.slice();
    }

}