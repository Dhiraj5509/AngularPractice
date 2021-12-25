import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : {
    type:string , 
    name : string , 
    content : string
  }[] = [] ;
  
  constructor(){
    
  }

  onServerAdded(serverDetail:{name:string , content:string})
  {
    this.serverElements.push({
      type: "server" , 
      name : serverDetail.name , 
      content : serverDetail.content
    })
  }
  
  onBlueprintAdded(serverDetail:{name:string , content:string})
  {
    this.serverElements.push({
      type: "blueprint" , 
      name : serverDetail.name , 
      content : serverDetail.content
    })
  }
}
