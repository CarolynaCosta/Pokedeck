import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Cadastro
  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Login
  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Logout
  async logout() {
    return signOut(this.auth);
  }

  // Usuário atual
  getUser(): User | null {
    return this.auth.currentUser;
  }
}
