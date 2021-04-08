import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { BigDamageDirective } from './directives/big-damage.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonsComponent,
    PokemoncardComponent,
    BigDamageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
