import { Injectable } from '@angular/core';
import { STUDENTS } from './student.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students = STUDENTS; //students egal à mock
  
  

  getAbsentStudents(selectedStudent: string, selectedAbsentStudents: string[]): string[] {
    if (selectedStudent !== '') {
      // Vérifier si l'étudiant sélectionné n'est pas déjà présent dans la liste
      if (selectedAbsentStudents.includes(selectedStudent)) {
        alert('Cet étudiant est déjà présent dans la liste des absents.');
        return selectedAbsentStudents;
      }
      selectedAbsentStudents.push(selectedStudent);
      return selectedAbsentStudents.slice();
    } else {
      return selectedAbsentStudents;
    }
  }

  getAbsentBoyStudents(selectedAbsentStudents: string[]): string[] {
    const absentBoyStudents = selectedAbsentStudents.filter(student => {
      return this.students.find(s => s.prenom === student && s.type === 'garçon');
    }).map(student => {
      return student;
    });
    
    return absentBoyStudents || []; 
  }

  getAbsentGirlStudents(selectedAbsentStudents: string[]): string[] {
    const absentGirlStudents = selectedAbsentStudents.filter(student => {
      return this.students.find(s => s.prenom === student && s.type === 'fille');
    }).map(student => {
      return student;
    });
    
    return absentGirlStudents || [];
  }

  removeAbsentStudent(student: string, selectedAbsentStudents: string[]): string[] {
    const newAbsentStudents = selectedAbsentStudents.filter(s => s !== student);
    console.log('szukam'+newAbsentStudents);
    return newAbsentStudents;
  }

  getPresentStudents(selectedAbsentStudents: string[]): string[] {
    const newPresentStudents: string[] = this.students
      .filter(student => selectedAbsentStudents.indexOf(student.prenom) === -1)
      .map(student => student.prenom);
      console.log(newPresentStudents);
    return newPresentStudents;
  }

  getPresentBoyStudents(newPresentStudents: string[]): string[] {
    const presentBoyStudents = newPresentStudents.filter(student => {
    return this.students.find(s => s.prenom === student && s.type === 'garçon');
    }).map(student => {
      console.log('to jest  ' + student);
      return student;
    
    });
    return presentBoyStudents || [];
  }

getPresentGirlStudents(newPresentStudents: string[]): string[] {
    const presentGirlStudents = newPresentStudents.filter(student => {
      return this.students.find(s => s.prenom === student && s.type === 'fille');
    }).map(student => {

    return student;
      
    });
   
    return presentGirlStudents || [];
  }
}

  


