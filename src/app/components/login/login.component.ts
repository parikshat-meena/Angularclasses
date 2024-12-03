import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  navigateToUser() {
    const queryParams = {
      name: `User${1}`,
      role: 'Admin',
    };

    // this.router.navigate(['/user', 123]); // Navigates to 'user/123'
    // this.router.navigate(['/pipe'], { queryParams: { id: 123 } });
    this.router.navigate(['/pipe'], { queryParams });
  }
}
