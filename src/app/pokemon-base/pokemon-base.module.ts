import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonFormComponent } from './pokemon-forms/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HighlighttextDirective } from '../_directives/highlighttext.directive';
import { CustomifDirective } from '../_directives/customif.directive';


const routes: Routes = [
  {
    path: "",
    children: [
      {path: "", component: PokemonListComponent},
      {path: ":id", component: PokemonFormComponent}
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent, 
    PokemonDetailComponent,
    PokemonFormComponent,
    HighlighttextDirective,
    CustomifDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [HighlighttextDirective, CustomifDirective]
})
export class PokemonBaseModule {}
