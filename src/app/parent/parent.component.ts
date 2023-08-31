import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentMessage = 'Hello from parent';

  onChildEvent(data: string) {
    console.log(`Received from child:`, data);
  }
}
