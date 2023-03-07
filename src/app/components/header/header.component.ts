import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tirage = 'Tirage au sort'
  absent = 'Absent.e.s'

  visible: boolean=false
}
