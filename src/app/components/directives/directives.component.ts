import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  firstName = '';
  showValue = false;
  player: string[] = ['rohit', 'virat', 'dhoni', 'sachin'];
  playerName = 'sachin';

  showLadder() {
    if (this.playerName == 'virat') {
      console.log('virat selected ');
    } else if (this.playerName == 'rohit') {
      console.log('rohit selected');
    }

    switch (this.playerName) {
      case 'virat':
        console.log('virat selected ');
        break;
      case 'rohit':
        console.log('rohit selected');
        break;
    }
  }
}
