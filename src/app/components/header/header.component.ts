import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tirage = 'Tirage au sort';
  absent = 'Absent.e.s';
  
  constructor(private router: Router) {}

  showAbsentStudents(): void {
    const absentGirlStudents = JSON.parse(localStorage.getItem('absentGirlStudents') || '[]');
    this.router.navigate(['/page2'], { state: { absentGirlStudents } });
  }
  
}