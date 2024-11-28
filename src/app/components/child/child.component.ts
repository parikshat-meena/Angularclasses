import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //@Input is used to send data from parent to child
  @Input() fname: number[] = [];
  @Input() str: string = '';
  lastName = '';

  //@Output is used to send data from child to parent
  @Output() sendChildValue = new EventEmitter();

  sendDataToParent() {
    this.sendChildValue.emit('mern mean');
  }
}
