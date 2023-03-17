import { Component} from '@angular/core';
import { STUDENTS } from 'src/app/student.mock';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component {
  students = STUDENTS; //students egal à mock

  titre = '🎰 Sélectionner une personne 🎰';

  constructor(private studentService: StudentService) {}
  
  selectedStudent: string = '';
  presentStudents: string[] = [];
 
  //fullStudentList: IStudent[] = [];
  //showFullList = false;
  
  
  getPresentStudentsFromLocalStorage(): string[] {
    const presentStudentsJSON = localStorage.getItem('presentMemoryStudents');
    if (presentStudentsJSON) {
      return JSON.parse(presentStudentsJSON);
    } else {
      return [];
    }
  }
  clonPresentStudentList(): string[] {
    // récupère la liste des étudiants présents
    const presentStudents = this.getPresentStudentsFromLocalStorage();
    // clone la liste en utilisant la méthode slice()
    const clonedPresentStudents = presentStudents.slice();
    console.log(clonedPresentStudents);
    return clonedPresentStudents;
}
/*
getFullStudentList() {
  let fullStudentList = mock.STUDENTS.sort(() => Math.random() - 0.5);
 console.log(fullStudentList);
  return fullStudentList;
} */
  getRandomStudent(): void {
    //this.showFullList = true;
    let presentStudents = this.clonPresentStudentList();
    if (presentStudents.length === 0) {
      alert("Il n'y a plus d'étudiant présent");
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * presentStudents.length);
    // cette variable contienne l'étudiante sélectionnée
    const selectedStudent = presentStudents[randomIndex];

    // supprime l'étudiant sélectionné de la liste
    presentStudents.splice(randomIndex, 1);
    // enregistre la liste modifiée dans le local storage
    localStorage.setItem(
      'presentMemoryStudents',
      JSON.stringify(presentStudents)
    );
    this.selectedStudent = selectedStudent;
    console.log('imie' + this.selectedStudent);
   // Vérifie le genre de l'étudiant sélectionné et affiche un message 
    const matchingStudent = this.students.find(
      (s) => s.prenom === selectedStudent
    );
    if (matchingStudent && matchingStudent.type === 'fille') {
      this.selectedStudent = `<strong>${selectedStudent}</strong> 🌸 <br>Tu es la grande gagnante !`;
    } else {
      this.selectedStudent = `<strong>${selectedStudent}</strong> 🌺 <br>Tu es le grand gagnant !`;
    }
  }
}
