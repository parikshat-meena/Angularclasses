import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectivesComponent, PipeComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '19thSeptMeanMern';
  num = 100;
  emitValue = 0;
  saveEmit(text: any) {
    console.log(text);
    this.emitValue = text;
  }
}
