import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
   name: string;
   description: string;
   imagePath: string;
   ingredients : Ingredient[] ; 
  constructor(name: string, desc: string, imagePath: string , ingredients : Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.ingredients = ingredients;
    this.imagePath = imagePath;
  }
}
