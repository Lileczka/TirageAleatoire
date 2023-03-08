import { Component } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tirage = 'Tirage au sort'
  absent = 'Absent.e.s'

  presentStudents: string[] = [];
  selectedAbsentStudents: string[] = [];
  newAbsentStudents: string[] = []; 

  visible: boolean=false
}