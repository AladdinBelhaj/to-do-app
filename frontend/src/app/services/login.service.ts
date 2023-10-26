import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    this.http
      .post<any>('http://localhost:3000/login', user)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', user.email);
          this.router.navigate(['/dashboard']);
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return of(null);
        })
      )
      .subscribe(
        (data) => {
          if (data === null) {
            // Handle specific error cases if needed.
          }
        },
        (error) => {
          console.error('HTTP request failed:', error);
          // You can log more detailed information about the error here.
        }
      );
  }

  logout() {
    localStorage.removeItem('token'); // save the token in local storage or in a cookie
    this.router.navigate(['/login']);
  }
}
