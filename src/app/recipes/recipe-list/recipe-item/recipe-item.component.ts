import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output()
  recipeSelected : EventEmitter<void> = new EventEmitter<void>() ; 

  @Input()
  recipe : Recipe ; 
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected()
  {
    this.recipeService.recipeSelected.emit(this.recipe) ; 
  }

}
