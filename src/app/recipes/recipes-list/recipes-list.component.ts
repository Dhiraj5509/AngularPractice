import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pauva' , 'https://static.toiimg.com/thumb/59736842.cms?imgsize=523732&width=509&height=340' , 'prepare Delicious pauva in just 2 min') , 

    new Recipe('Aloo paratha' , 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Aloo_Paratha1.jpg' , 'Yummy aloo paratha')
  ] ; 
  constructor() { 

  }

  ngOnInit(): void {
  }

}
