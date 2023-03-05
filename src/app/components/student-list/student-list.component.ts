import { Component} from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = STUDENTS; //students egal à mock
  
  titre= "ajouter";
  
  selectedStudent = '';
  selectedAbsentStudents: string[] = [];
  
  
  
  
  getAbsentStudents() {
    this.selectedAbsentStudents.push(this.selectedStudent);
    this.selectedStudent = ''; 
    let newAbsentStudents: string[] = this.selectedAbsentStudents.slice();
    // la méthode slice() pour créer une copie de tous les éléments de la liste
    //Cette copie est stockée dans une nouvelle variable appelée newAbsentStudents, qui est de type string[].
    console.log("La valeur sélectionnée est : " + this.selectedAbsentStudents);
    console.log(newAbsentStudents);
    
  }

  getPresentStudent() {
    let newPresentStudents: string[] = this.students.filter(student => {
      return this.selectedAbsentStudents.indexOf(student.prenom) === -1;
    }).map(student => {
      return student.prenom;
    });
    console.log(newPresentStudents);
  }
}
