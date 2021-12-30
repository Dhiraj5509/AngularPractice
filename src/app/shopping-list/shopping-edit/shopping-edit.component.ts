import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService : ShoppingListService) { }

  @Output()
  ingridientAdded : EventEmitter<Ingredient> = new EventEmitter<Ingredient>() ; 

  ngOnInit() {
  }
  onIngridientAdded(ingName : string , ingAmount : string)
  {
    let imgAmo = parseInt(ingAmount) ; 
    let ingridient = new Ingredient(ingName , imgAmo);
    this.shoppingListService.addIngredient(ingridient) ;  
  }
}
