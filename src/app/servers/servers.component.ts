import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled = true ;
  servername = '' ;  
  serverCreationStatus = "No server was created" ; 
  constructor() {
    setTimeout(() => {
        this.isDisabled = false ; 
    }, 2000);
   }

  ngOnInit(): void {
  }
  OnServerCreation()
  {
    this.serverCreationStatus = "Server created successfully" ; 
  }
  OnTextChanged(event : Event)
  {
    this.servername = (<HTMLInputElement>event.target).value ; 
  }
}
