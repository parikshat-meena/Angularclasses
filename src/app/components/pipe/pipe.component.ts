import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquarePipe } from '../../pipes/square.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, SquarePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName = 'Mansi';
  date = '12/10/2024';

  str = 'parikshat';
  s = 'parik';
  checkSubstring() {
    console.log(this.str.includes(this.str), 'checking');
  }

  ngOnInit() {
    this.checkSubstring();
  }
}
