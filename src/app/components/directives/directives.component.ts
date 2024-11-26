import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  firstName = 'akash';
  showValue = true;
  player: string[] = ['rohit', 'virat', 'dhoni', 'sachin'];
  playerName = 'sachin';

  myClass = {
    heading: this.showValue,
    title: this.showValue,
  };
  disableClass = {
    disableText: !this.showValue,
  };

  myActiveStyle = {
    color: 'yellow',
  };

  mydisabledStyle = {
    color: 'red',
  };

  changeColor() {
    console.log(this.showValue, 'toggle');
    this.showValue = !this.showValue;
  }
  onTextChange() {
    console.log(this.playerName, 'player name');
    console.log(this.firstName, 'first name');
  }
}
