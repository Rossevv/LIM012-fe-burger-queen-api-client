import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceAuthService } from '../../services/service-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: ServiceAuthService
  ) { }

  ngOnInit(): void {
  }

  navigateToOrders(): void {
    this.router.navigate(['/navigation/order']);

  }

  authUser(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    // if (!email) { alert('ingrese email'); return; }
    // if (!password) {alert('ingrese password'); return; }
    const objUser = {
      email,
      password
    };
    this.authService.getServiceAuth(objUser)
      .subscribe((resp: any) => {
        localStorage.setItem('token', resp.token);
        console.log(resp.status);
        console.log(resp.token);
        console.log(resp.token.length);
        if (resp.token.length > 0) {
         this.navigateToOrders();
        } else {
          alert('email o password no coinciden');
        }
      });
  }
}

