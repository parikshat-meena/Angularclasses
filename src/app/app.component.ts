import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectivesComponent, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '19thSeptMeanMern';
}
