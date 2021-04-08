import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {
  // @ts-ignore
  @Input() pokemonCard: { id: number; name: string; captured: boolean; damage: number };
  // @ts-ignore
  @Input() lineType: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
