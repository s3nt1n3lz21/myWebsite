import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/model/IWorkExperience';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {

  constructor() { }

  skills = {
    "Git": 3.5,
    "JavaScript": 3.25,
    "HTML": 3,
    "SCSS": 3,
    "NPM": 3,
    "Agile": 2.75,
    "TypeScript": 2.5,
    "Angular 12": 2.5,
    "Azure DevOps": 1.5,
    "Java 8": 1.5,
    "Maven": 1.5,
    "Jasmine/Karma": 1.25,
    "Python": 1,
    "Docker": 0.5,
    "JUnit": 0.5
  }

  workExperiences: WorkExperience[] = [
    {
      jobTitle: 'Angular Developer',
      agency: 'The Just Brand',
      client: 'Talogy',
      startDate: '01/2022',
      endDate: '05/2022',
      location: 'Remote',
      description: [
        'Angular 12, TypeScript, HTML, SCSS, NPM, Git, Agile, Jira, Azure DevOps, GitHub, RXJS, Angular Material',
        'Worked closely with UI designer to create prototypes of designs to help in appraisal.',
        'Built responsive mobile first and printable designs using BEM methodology.',
        'Sole UI developer tasked with creating 3 Page UI with forms for internal use.',
        'Improved UX using Modals, Notifications, and Persisting App State on page refresh.'
      ]
    }
  ]

  ngOnInit(): void {
  }

}
