import { Component, Input, OnInit, Output , EventEmitter, ViewChild,ContentChild , ElementRef } from '@angular/core';

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
  // newServerContent = '';


  // using ViewChild() decorator we can get acess to the dom element/component of the template 
  // ViewChild() return the ElementRef
  // here serverContentLocalReference is a name of the local reference attached to the dom element
  @ViewChild('serverContentLocalReference' , {static:true}) serverContent : ElementRef ;
  
  @ContentChild('localReference' , {static:true}) localReference : ElementRef ; 
  onAddServer(serverName:HTMLInputElement) {
    // we are emitting the response to the parent..
    // we can access the dom element here , it is not recommended to do so!
    // serverName.value = "dummy value" ; 
    this.serverCreated.emit({
      
      name : serverName.value , 
      content : this.serverContent.nativeElement.value 
    })
  }

  onAddBlueprint(serverName : HTMLInputElement) {
    // console.log(this.localReference);
    
    this.blueprintCreated.emit({
      name:serverName.value , 
      content : this.serverContent.nativeElement.value 
    })
  }
  ngOnInit(): void {
  }

}
