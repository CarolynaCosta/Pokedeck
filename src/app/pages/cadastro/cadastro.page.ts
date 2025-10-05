import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async cadastrar() {
    try {
      await this.authService.register(this.email, this.password);

      const toast = await this.toastCtrl.create({
        message: 'Conta criada com sucesso!',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      this.router.navigateByUrl('/login', { replaceUrl: true });
    } catch (error: any) {
      console.error('Erro ao cadastrar:', error);

      const toast = await this.toastCtrl.create({
        message: 'Erro ao cadastrar! Verifique os dados.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  voltarLogin() {
    this.router.navigateByUrl('/login');
  }
}
