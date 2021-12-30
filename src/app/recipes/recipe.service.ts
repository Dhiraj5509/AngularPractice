import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected :EventEmitter<Recipe> = new EventEmitter<Recipe>() ; 
    
    private recipes: Recipe[] = [
        new Recipe('Pauva'  , 'Prepare Delicious pauva in just 2 min' , 'https://static.toiimg.com/thumb/59736842.cms?imgsize=523732&width=509&height=340',[
            new Ingredient('Pauva' , 1) , 
            new Ingredient('onion' , 1) , 
        ]) , 
    
        new Recipe('Aloo paratha' , 'Yummy aloo paratha' , 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Aloo_Paratha1.jpg' , [
            new Ingredient('potato' , 2) , 
            new Ingredient('curd' , 1)
        ]) , 

        new Recipe('Burger' , 'Prepare Delicious Burger ' , 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg' , [
            new Ingredient('buns' , 2) , 
            new Ingredient('tikki' , 1) ,
            new Ingredient('cheese' , 1)
        ] )
    ] ;
    
    constructor(private shoppingListService : ShoppingListService){

    }
    getRecipes()
    {
        return this.recipes ; 
    }

    addIngredients(ingredients : Ingredient[])
    {
        this.shoppingListService.addIngredients(ingredients) ; 
    }
}