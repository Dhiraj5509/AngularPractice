import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled = true ; 
  constructor() {
    setTimeout(() => {
        this.isDisabled = false ; 
    }, 2000);
   }

  ngOnInit(): void {
  }

}
