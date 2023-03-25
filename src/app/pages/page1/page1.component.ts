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

CurrentStateList(): void {
  // Créer une nouvelle liste "currentState" vide dans local storage
  localStorage.setItem('currentState', JSON.stringify([]));
}

addSelectedStudentToCurrentState(selectedStudent: string): void {
  // Ajouter l'étudiant sélectionné à la nouvelle liste "currentState"
  const currentStateJSON = localStorage.getItem('currentState');
  let currentState: string[] = [];
  if (currentStateJSON) {
    currentState = JSON.parse(currentStateJSON);
  }
  currentState.push(selectedStudent);
  localStorage.setItem('currentState', JSON.stringify(currentState));
}

getRandomStudent(): void {
  let presentStudents = this.clonPresentStudentList();
  let students = this.students.map(s => s.prenom);
  presentStudents = presentStudents.filter(s => students.includes(s));

  // Vérifier si tous les étudiants sont absents
  if (presentStudents.length === 0) {
    // Vérifier s'il y a des étudiants dans la liste 'currentState'
    const currentStateJSON = localStorage.getItem('currentState');
    let currentState: string[] = [];
    if (currentStateJSON) {
      currentState = JSON.parse(currentStateJSON);
    }
    if (currentState.length > 0) {
      // Réinitialiser la liste 'presentMemoryStudents' à partir de la liste 'currentState'
      localStorage.setItem('presentMemoryStudents', JSON.stringify(currentState));
      // Réinitialiser la liste 'currentState'
      this.CurrentStateList();
      // Répéter le processus de filtrage et de sélection aléatoire à partir de la liste 'presentMemoryStudents'
      presentStudents = this.clonPresentStudentList();
      students = this.students.map(s => s.prenom);
      presentStudents = presentStudents.filter(s => students.includes(s));
    }
  }

  // Effectuer le tirage aléatoire à partir de la liste 'presentMemoryStudents'
  const randomIndex = Math.floor(Math.random() * presentStudents.length);
  const selectedStudent = presentStudents[randomIndex];

  // Mettre à jour la liste 'presentMemoryStudents' en retirant l'étudiant sélectionné
  presentStudents.splice(randomIndex, 1);
  localStorage.setItem('presentMemoryStudents', JSON.stringify(presentStudents));

  // Ajouter l'étudiant sélectionné à la liste 'currentState'
  this.addSelectedStudentToCurrentState(selectedStudent);

  // Mettre à jour la variable 'selectedStudent' pour afficher le résultat
  const matchingStudent = this.students.find((s) => s.prenom === selectedStudent);
  if (matchingStudent && matchingStudent.type === 'fille') {
    this.selectedStudent = `<strong>${selectedStudent}</strong> 🌸 <br>Tu es la grande gagnante !`;
  } else {
    this.selectedStudent = `<strong>${selectedStudent}</strong> 🌺 <br>Tu es le grand gagnant !`;
  }
}



  
}
