import { Component} from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
  students = STUDENTS; //students egal à mock
 
  
  titre= '🎰 Sélectionner une personne 🎰';
  
  presentMemoryStudents: string[] = [];
 
  selectedStudent!: string ;
  presentBoyStudents: string[] = [];
  presentGirlStudents: string[] = [];
  alreadyDisplayed: boolean = false;
  studentSelected: boolean = false;
  constructor(private studentService: StudentService) { }
  
  
  getRandomStudent(): void {
    // Retrieve the presentMemoryStudents list from local storage
    const presentMemoryStudentsJson = localStorage.getItem("presentMemoryStudents");
    if (presentMemoryStudentsJson) {
      this.presentMemoryStudents = JSON.parse(presentMemoryStudentsJson);
    } else {
      this.presentMemoryStudents = [];
    }
  
    // generer un index aléatoire pour selectionner une personne de la liste stocké dans local host
    const randomIndex = Math.floor(Math.random() * this.presentMemoryStudents.length);
    this.selectedStudent = this.presentMemoryStudents[randomIndex];
  
    // la liste des filles et garçons presents
    this.presentBoyStudents = this.studentService.getPresentBoylStudents(this.presentMemoryStudents);
    this.presentGirlStudents = this.studentService.getPresentGirlStudents(this.presentMemoryStudents);
  }
}






  

  
  
  
  
  
  
  
  

