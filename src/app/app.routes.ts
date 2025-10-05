import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { CadastroPage } from './pages/cadastro/cadastro.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginPage },

  { path: 'cadastro', component: CadastroPage },

  { path: 'home', component: HomePage },

  { path: 'pokemon', loadComponent: () => import('./pages/pokemon/pokemon.page').then(m => m.PokemonPage) },

  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage) },
];
