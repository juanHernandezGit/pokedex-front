import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  template: `<app-pokemon></app-pokemon>`
  // styleUrls: ['./app.component.css']
})
export class AppComponent { }
