import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() message: string | undefined;
  @Output() childEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.childEvent.emit('Hello from child');
  }
}
