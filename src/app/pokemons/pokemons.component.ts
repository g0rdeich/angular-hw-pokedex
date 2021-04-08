import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  // @ts-ignore
  @Input() lineType: boolean;

  cards = [
    {
      name: 'bulbasaur',
      id: 1,
      captured: false,
      damage: 30,
    },
    {
      name: 'ivysaur',
      id: 2,
      captured: false,
      damage: 40,
    },
    {
      name: 'venusaur',
      id: 3,
      captured: false,
      damage: 51,
    },
    {
      name: 'charmander',
      id: 4,
      captured: false,
      damage: 38,
    },
    {
      name: 'charmeleon',
      id: 5,
      captured: false,
      damage: 60,
    },
    {
      name: 'charizard',
      id: 6,
      captured: false,
      damage: 100,
    },
    {
      name: 'squirtle',
      id: 7,
      captured: false,
      damage: 20,
    },
    {
      name: 'wartortle',
      id: 8,
      captured: false,
      damage: 35,
    },
    {
      name: 'blastoise',
      id: 9,
      captured: false,
      damage: 60,
    },
    {
      name: 'caterpie',
      id: 10,
      captured: false,
      damage: 5,
    },
    {
      name: 'metapod',
      id: 11,
      captured: false,
      damage: 15,
    },
    {
      name: 'butterfree',
      id: 12,
      captured: false,
      damage: 35,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
