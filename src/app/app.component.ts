import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '19thSeptMeanMern';
}
