import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  fireInterval : EventEmitter<number>  = new EventEmitter<number>() ;

  num : number ; 
  intervalId : any ; 
  
  ngOnInit(): void {
  }
  constructor()
  {
    this.num=1 ; 
  }
  startGame()
  {
    console.log("Game started");
    this.intervalId = setInterval(()=>{
      this.fireInterval.emit(this.num);
      this.num++ ; 
    } , 1000);
  }
  stopGame()
  {
    clearInterval(this.intervalId) ; 
    console.log("Game stopped");
  }
  isOdd()
  {
    if(this.num%2==0)
    {
      return true ; 
    }
    else
    {
      return false;
    }
  }
}


