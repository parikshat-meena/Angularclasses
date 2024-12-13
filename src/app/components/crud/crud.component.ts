import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  MinValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  userData: any[] = [];
  currentUser: { id?: string; fname: string; role: string } = {
    fname: '',
    role: '',
  };
  constructor(private userService: UserDataService) {}

  fetchData() {
    this.userService.fetchUserData().subscribe((res) => {
      this.userData = res;
      console.log(res, 'res in fetch data');
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  saveData() {
    if (this.currentUser?.id) {
      this.userService
        .updateUserData(this.currentUser, this.currentUser.id)
        .subscribe((res) => {
          this.fetchData();
          this.resetForm();
        });
    } else {
      this.userService.insertData(this.currentUser).subscribe((res) => {
        console.log('data inserted successfully');
        this.fetchData();
        this.resetForm();
      });
    }
  }

  updateData(userData: any) {
    this.currentUser = userData;
    // this.userService.updateUserData(this.currentUser, id).subscribe((res) => {
    //   this.fetchData();
    //   this.resetForm();
    // });
  }

  deleteUser(id: string) {
    this.userService.deleteUserData(id).subscribe((res) => {
      this.fetchData();
    });
  }

  resetForm() {
    this.currentUser = {
      fname: '',
      role: '',
    };
  }
}
