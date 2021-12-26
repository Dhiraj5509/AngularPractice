import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFeature:string = 'recipe' ; 
   
  changeFeatureContent(feature:string)
  {
    this.currentFeature = feature ; 
  }

  isRecipeSelected()
  {
    if(this.currentFeature === 'recipe')
    {
      return true ; 
    }
    return false;  
  }

  isShoppingListSelected()
  {
    if(this.currentFeature === 'shopping')
    {
      return true ; 
    }
    return false ; 
  }
}
