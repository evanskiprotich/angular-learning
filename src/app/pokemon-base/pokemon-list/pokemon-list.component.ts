import { AfterContentInit, AfterViewInit, Component, contentChildren, ElementRef, OnInit, Renderer2, viewChild, viewChildren } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

// Decorator pattern
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit, AfterViewInit, AfterContentInit {
  pokemons: Pokemon[] = [];
  

  constructor(private pokemonService : PokemonService, private renderer: Renderer2) { 

    
  }
  ngAfterContentInit(): void {

  }
  ngAfterViewInit(): void {

  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon : Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data; 
    });
  }

  

}
