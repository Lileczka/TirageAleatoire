import { Component} from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
  students = STUDENTS;
  
  titre= '🎰 Sélectionner une personne 🎰';
  
  cacheMoi:boolean=true
  visible: boolean=false
  showStudentList = false;
  
  presentStudents: string[] = []; 
  selectedAbsentStudents: string[] = [];
  
 
  
  constructor(private studentService: StudentService) { 
    this.presentStudents = this.studentService.getPresentStudents(this.selectedAbsentStudents);
  }
  
getPresentStudents(): void {
  
  this.presentStudents = this.studentService.getPresentStudents(this.selectedAbsentStudents);
  const presentStudentsJson = localStorage.getItem("presentMemoryStudents");
  if (presentStudentsJson !== null) {
    const presentMemoryStudents = JSON.parse(presentStudentsJson);
    console.log(presentMemoryStudents);
  } else {
    console.log("La valeur de presentMemoryStudents est null");
  }
}
}
//this.cacheMoi=!this.cacheMoi
  //this.visible=!this.visible;
  

  
  
  
  
  /*getPresentStudent() {
    let newPresentStudents: string[] = this.students.filter(student => {
      return this.selectedAbsentStudents.indexOf(student.prenom) === -1;
    }).map(student => {
      return student.prenom;
    });
    console.log('Lista'+ newPresentStudents);
  } */
  
  
  

