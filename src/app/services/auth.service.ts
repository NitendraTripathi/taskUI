import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router,private api:ApiService) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(user: any): Observable<any> {
    this.api.Loginuser(user).subscribe(
      (result)=>{
        this.setToken('abcefrhty');
        debugger;
        return of({ name: user.fullname, email: user.email });
            },
       (err)=>{
        return throwError(new Error('Failed to login'));
       }
       );
       return throwError(new Error('Failed to login'));
    // if (email === 'nitendra@gmail.com' && password === 'admin') {
    //   this.setToken('abcefrhty');
    //   return of({ name: 'Nitendra Tripathi', email: 'nitendra@gmail.com' });
    // }
    // return throwError(new Error('Failed to login'));
  }
}
