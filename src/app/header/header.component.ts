import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  // if in nav bar user selects other link , then we will emit the feature to the parent that expects the change
  @Output()
  featureSelected : EventEmitter<string> = new EventEmitter<string>() ; 
  onFeatureSelected(feature:string)
  {
    this.featureSelected.emit(feature) ; 
  }
}
