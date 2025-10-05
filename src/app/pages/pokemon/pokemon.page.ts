import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  imports: [CommonModule, IonicModule, HttpClientModule, FormsModule],
})
export class PokemonPage implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchText: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((response: any) => {
        response.results.forEach((poke: any) => {
          this.http.get(poke.url).subscribe((data: any) => {
            data.flipped = false;
            this.pokemons.push(data);
            this.filteredPokemons = [...this.pokemons];
          });
        });
      });
  }

  searchPokemons() {
    const text = this.searchText.trim().toLowerCase();

    if (text === '') {
      this.filteredPokemons = [...this.pokemons];
    } else {
      this.filteredPokemons = this.pokemons.filter((p) =>
        p.name.toLowerCase().includes(text)
      );
    }
  }

  toggleFlip(pokemon: any) {
    pokemon.flipped = !pokemon.flipped;
  }

  voltar() {
    this.router.navigateByUrl('/home');
  }
}
