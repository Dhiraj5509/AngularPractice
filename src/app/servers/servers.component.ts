import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled = true ;
  servername = '' ;  
  servers : string[] = []; 
  serverCreationStatus = "No server was created" ; 
  isButtonCLicked = false ; 
  constructor() {
   }
   
  ngOnInit(): void {
  }

  OnInput()
  {
    this.isButtonCLicked = false ;
  }
  isButtonDisabled()
  {
    if(this.servername === '')
    {
      this.isDisabled = true ; 
    }
    else{
      this.isDisabled = false ; 
    }
    return this.isDisabled ; 
  }
  OnServerCreation()
  {
    this.servers.push(this.servername) ; 
    this.serverCreationStatus = "Server created successfully" ; 
    this.isButtonCLicked = true ; 
    console.log(this.servers.length);
    
  }
  OnTextChanged(event : Event)
  {
    this.servername = (<HTMLInputElement>event.target).value ; 
  }
}
