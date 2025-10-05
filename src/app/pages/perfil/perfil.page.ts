import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  user = {
    nome: 'Ana Carolyna Costa',
    turma: 'Análise e Desenvolvimento de Sistemas - ADS0301M',
    unidade: 'BG - UNISUAM',
    foto: 'assets/carolimg.jpeg',
  };

  constructor(private router: Router) {}

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigateByUrl('/login');
      })
      .catch((err) => console.error('Erro ao sair:', err));
  }

  voltar() {
    this.router.navigateByUrl('/home');
  }
}
