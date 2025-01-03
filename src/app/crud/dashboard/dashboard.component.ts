import { Component, Input } from '@angular/core';
import { LoginUserDataService } from '../../services/login-user-data.service';
import { AddComponent } from '../add/add.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AddComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private loginService: LoginUserDataService) {}

  userName = 'parikshat';
  showValue = false;
  currentUser: any;
  // ngOnInit() is a lifecycle hook
  // It gets called at component initialisation
  ngOnInit() {
    this.currentUser = this.loginService.getUserDetails();
    console.log(this.currentUser);
  }
  toggleValue() {
    this.showValue = !this.showValue;
  }
}
