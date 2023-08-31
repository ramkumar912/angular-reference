import { Component } from '@angular/core';
import { commonService } from '@app/common.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private common:commonService){
    this.common.sub.subscribe(x=> console.log("home component value",x));
}
}

