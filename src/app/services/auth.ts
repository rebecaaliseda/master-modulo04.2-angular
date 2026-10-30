import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logged = false;
  private username = '';

  constructor() {
    const auth = localStorage.getItem('auth');

    if (auth) {
      const data = JSON.parse(auth);
      this.logged = data.logged;
      this.username = data.username;
    }
  }

  login(credentials: { username: string; password: string }): Observable<boolean> {
    if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
      this.logged = true;
      this.username = credentials.username;

      this.save();

      return of(true).pipe(delay(2000));
    }

    return of(false).pipe(delay(2000));
  }

  logout(): void {
    this.logged = false;
    this.username = '';

    this.save(); // ← IMPORTANTE
  }

  isLogged(): boolean {
    return this.logged;
  }

  getUsername(): string {
    return this.username;
  }

  private save(): void {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        logged: this.logged,
        username: this.username,
      }),
    );
  }
}
