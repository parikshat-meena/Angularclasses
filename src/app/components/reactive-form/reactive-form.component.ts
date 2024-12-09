import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  MinValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  myForm = new FormGroup({
    fname: new FormControl('vaishnavi', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  OnSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value, 'value of reactive form ');
    } else {
      console.log(this.myForm, 'error from forms ');
    }
  }
}
