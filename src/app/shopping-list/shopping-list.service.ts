import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
       
    ];

    getIngredient()
    {
        return this.ingredients ; 
    }

    addIngredient(ingredient : Ingredient)
    {
        this.ingredients.push(ingredient);
    }
    
    addIngredients(ingredients : Ingredient[])
    {
        for(let ingredient of ingredients ){
            this.addIngredient(ingredient) ; 
        }
    }
}