import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicDirective } from './directives/basic.directive';
import { BetterDirective } from './directives/better.directive';
import { TestDirective } from './directives/test.directive';
@NgModule({
  declarations: [
    AppComponent , 
    BasicDirective, BetterDirective, TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
