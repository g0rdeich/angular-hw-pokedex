import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw-pokedex';
  lineType = false;

  parentEventHandlerFunction(valueEmitted: boolean): void{
    this.lineType = valueEmitted;
  }
}
