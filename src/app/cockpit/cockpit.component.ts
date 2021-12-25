import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // output declarator stating that it need to send something out of the component
  @Output()
  // we are creating the EventEmitter object and so we can emit the event to the parent tag 
  serverCreated =new EventEmitter<{name:string , content:string}>() ; 

  // we can also give the alias to the decorator  
  @Output('bprintCreated')
  blueprintCreated = new EventEmitter<{name:string , content:string}>() ; 
  constructor() { }
  // newServerName = '';
  newServerContent = '';

  onAddServer(serverName:HTMLInputElement) {
    // we are emitting the response to the parent..
    this.serverCreated.emit({
      name : serverName.value , 
      content : this.newServerContent
    })
  }

  onAddBlueprint(serverName : HTMLInputElement) {
    this.blueprintCreated.emit({
      name:serverName.value , 
      content : this.newServerContent
    })
  }
  ngOnInit(): void {
  }

}
