import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private http: HttpClient) { }

getPokemon(id: number){
  return this.http.get<Pokemon>(`${POKEMON_API}/1`)
}

getPokemons(): Observable<Pokemon[]>{
  return this.http.get<Pokemon[]>(POKEMON_API);
}

}
