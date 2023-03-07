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
  presentMemoryStudents : string[] = [];
  
  
  constructor(private studentService: StudentService) { 
    this.presentStudents = this.studentService.getPresentStudents(this.selectedAbsentStudents);
  }
  
  getPresentStudents(): void {
    this.presentStudents = this.studentService.getPresentStudents(this.selectedAbsentStudents);
    // Récupérer la chaîne JSON de localStorage avec la clé presentMemoryStudents
    const presentStudentsJson = localStorage.getItem("presentMemoryStudents");
  
    if (presentStudentsJson !== null) {
      this.presentMemoryStudents = JSON.parse(presentStudentsJson);
      console.log(this.presentMemoryStudents);
    } else {
      console.log("La valeur de presentMemoryStudents est null");
    }
  }
}

//this.cacheMoi=!this.cacheMoi
  //this.visible=!this.visible;
  

  
  
  
  
  
  
  
  

