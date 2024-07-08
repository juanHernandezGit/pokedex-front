import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importa FormsModule aquí
  templateUrl: './pokemon.component.html'
  // styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemon: any;
  pokemonId: number | null = null;  // Inicialmente null, no se carga ningún Pokémon

  constructor(private pokemonService: PokemonService) { }

  onSubmit(): void {
    if (this.pokemonId !== null) {
      this.getPokemon(this.pokemonId);
    } else {
      console.error('No Pokémon ID provided');
    }
  }

  getPokemon(id: number): void {
    this.pokemonService.getPokemonById(id).subscribe(
      (data) => {
        this.pokemon = data;
        console.log('Pokemon data:', this.pokemon);  // Imprime los datos del Pokémon en la consola
      },
      (error) => {
        console.error('Error fetching Pokémon:', error);
      }
    );
  }
}
