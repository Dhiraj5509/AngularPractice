import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[] = [
    new Ingridient('Apple' , 500) , 
    new Ingridient('Tomato' , 50) , 
    new Ingridient('Potato' , 60)
  ] ; 
  constructor() { }

  ngOnInit(): void {
  }

}
