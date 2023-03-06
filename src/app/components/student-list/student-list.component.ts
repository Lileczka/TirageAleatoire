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
  newPresentStudents: string[] = [];
  newAbsentStudents: string[] = []; 

  getAbsentStudents(): void {
    if (this.selectedStudent !== '') {
     // Vérifier si l'étudiant sélectionné n'est pas déjà présent dans la liste
    if (this.selectedAbsentStudents.includes(this.selectedStudent)) {
      alert('Cet étudiant est déjà présent dans la liste des absents.'); 
      return;
    }
      this.selectedAbsentStudents.push(this.selectedStudent);
      this.selectedStudent = '';
      this.newAbsentStudents = this.selectedAbsentStudents.slice();
      console.log("La valeur sélectionnée est : " + this.newAbsentStudents);
    }
  }

  removeAbsentStudent(student: string): void {
    this.selectedAbsentStudents = this.selectedAbsentStudents.filter(s => s !== student);
    this.newAbsentStudents = this.selectedAbsentStudents.slice();
    console.log(this.selectedAbsentStudents);
  }

getPresentStudent() {
    let newPresentStudents: string[] = this.students.filter(student => {
      return this.selectedAbsentStudents.indexOf(student.prenom) === -1;
    }).map(student => {
      return student.prenom;
    });
    console.log('Lista'+ newPresentStudents);
  }
   
  // Filtrer les garçons de la liste des étudiants absents
   getPresentBoyStudents(): string[] {
    const presentBoyStudents = this.selectedAbsentStudents.filter(student => {
      return this.students.find(s => s.prenom === student && s.type === 'garçon');
    }).map(student => {
      return student;
    });

    return presentBoyStudents || [];
  }

  getPresentGirlStudents(): string[] {
    const presentGirlStudents = this.selectedAbsentStudents.filter(student => {
      return this.students.find(s => s.prenom === student && s.type === 'fille');
    }).map(student => {
      return student;
    });

    return presentGirlStudents || [];
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



