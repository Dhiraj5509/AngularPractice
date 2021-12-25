import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num : number[] = [] ; 
  
  constructor(){
    
  }
  onIntervalFired(num : number)
  {
    if(num%2==0){
      this.num.push(num)
    }
    else
    {
      this.num.push(num) ; 
    }

  }

}
