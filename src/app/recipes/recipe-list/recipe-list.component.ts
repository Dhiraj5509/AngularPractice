import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pauva'  , 'Prepare Delicious pauva in just 2 min' , 'https://static.toiimg.com/thumb/59736842.cms?imgsize=523732&width=509&height=340') , 

    new Recipe('Aloo paratha' , 'Yummy aloo paratha' , 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Aloo_Paratha1.jpg' )
  ] ; 
  constructor() { 

  }

  ngOnInit(): void {
  }

}
