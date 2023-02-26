import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-popular',
  templateUrl: './single-popular.component.html',
  styleUrls: ['./single-popular.component.css']
})
export class SinglePopularComponent {

  @Input() popular: any;

  constructor() { }

}
