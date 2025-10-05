import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } catch {
      const toast = await this.toastCtrl.create({
        message: 'Email ou senha inválidos!',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }

  irParaCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}
