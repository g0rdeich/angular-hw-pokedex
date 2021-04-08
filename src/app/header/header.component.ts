import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  @Input() lineType: boolean;

  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  setLines(): void {
    this.buttonClicked.emit(true);
  }

  setCards(): void {
    this.buttonClicked.emit(false);
  }
}
