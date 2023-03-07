import { Component } from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  students = STUDENTS; //students egal à mock
  
  titre= "ajouter";
  
  selectedStudent = '';
  selectedAbsentStudents: string[] = [];
  presentStudents: string[] = [];
  newAbsentStudents: string[] = []; 
  

  constructor(private studentService: StudentService) {}
  
  getAbsentStudents(): void {
    this.selectedAbsentStudents = this.studentService.getAbsentStudents(this.selectedStudent, this.selectedAbsentStudents);
    console.log (this.selectedAbsentStudents )
  }
  
  removeAbsentStudent(student: string): void {
    this.selectedAbsentStudents = this.studentService.removeAbsentStudent(student, this.selectedAbsentStudents);
    console.log (this.selectedAbsentStudents)
  }
  
  getPresentStudents(): void {
    this.presentStudents = this.studentService.getPresentStudents(this.selectedAbsentStudents);
    console.log(this.presentStudents);
    const presentStudentsJson = JSON.stringify(this.presentStudents);
    localStorage.setItem("presentMemoryStudents", presentStudentsJson);
  }

  
  getAbsentBoyStudents(): string[] {
    if (this.selectedAbsentStudents) {
      this.newAbsentStudents = this.studentService.getAbsentBoyStudents(this.selectedAbsentStudents);
      return this.newAbsentStudents;
    } else {
      return [];
    }
  }

  getAbsentGirlStudents(): string[] {
    if (this.selectedAbsentStudents) {
      this.newAbsentStudents = this.studentService.getAbsentGirlStudents(this.selectedAbsentStudents);
      return this.newAbsentStudents;
    } else {
      return [];
    }
  }
}
  /* 
  Methodes que je n'utilise plus:
  
  getAbsentStudents() {
    this.selectedAbsentStudents.push(this.selectedStudent);
    this.selectedStudent = ''; 
    
    let newAbsentStudents: string[] = this.selectedAbsentStudents.slice();
    // la méthode slice() pour créer une copie de tous les éléments de la liste
    //Cette copie est stockée dans une nouvelle variable appelée newAbsentStudents, qui est de type string[].
    console.log("La valeur sélectionnée est : " + this.selectedAbsentStudents);
    console.log(newAbsentStudents);
    
  }
  removeAbsentStudent(studentName: string): void {
   this.selectedAbsentStudents = this.selectedAbsentStudents.filter(student => student !== studentName);
  }

  /*removeStudentFromPresentList(studentName: string): void {
    const index = this.newPresentStudents.indexOf(studentName);
    if (index !== -1) {
      this.newPresentStudents.splice(index, 1);
    }
  }
  removeAbsentStudent(student: string): void {
    this.selectedAbsentStudents = this.selectedAbsentStudents.filter(s => s !== student);
  }
  */

