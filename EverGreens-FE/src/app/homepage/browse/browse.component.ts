import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

}
