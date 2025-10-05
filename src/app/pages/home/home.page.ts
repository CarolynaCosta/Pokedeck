import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage {
  constructor(private router: Router) {}

  goToPokemon() {
    this.router.navigateByUrl('/pokemon');
  }

  goToPerfil() {
    this.router.navigateByUrl('/perfil');
  }
  voltar() {
      this.router.navigateByUrl('/login');
    }
}

