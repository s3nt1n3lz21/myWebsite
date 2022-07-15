import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from 'src/app/model/IWorkExperience';

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

  workExperiences: IWorkExperience[] = [
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
    },
    {
      jobTitle: 'Angular Developer',
      agency: 'The Just Brand',
      client: '10X',
      startDate: '06/2020',
      endDate: '03/2021',
      location: 'Remote',
      description: [
        'Angular 9, TypeScript, HTML, SCSS, Jasmine, Karma, NPM, Git, Agile, Jira, HighCharts, Azure DevOps, GitHub, ng-select, RXJS, flatpickr, immutable.js, lodash, eslint, stylelint',
        'Improved user experience and UI responsiveness by using the on-push change detection strategy and detaching the change detector, reducing unnecessary loading.',
        'Reduced build pipeline time and risk of downtime by caching dependencies during pipeline, removing dependence on external websites. ',
        'Reduced risk of downtime and code quality by adding build validation policies, requiring unit tests and syntax checker to pass before merging PRs.',
        'Reduced pipeline time, by running unit tests in parallel over multiple CPU cores and  cleaning up CSS after running tests, preventing memory leaks.',
        'Improved code quality and prevented code coverage dropping by ensuring PR pipeline fails if unit tests have not been written for new and changed code.',
        'Improved team coding and unit test standards by writing coding, syntax and unit test guideline documentation and coaching the team on standards.',
        'Improved tracking of code coverage and test results, by publishing test results and code coverage during build pipeline. ',
        'Improved code syntax and quality by migrating from old syntax checker TSLint to new ESLint, adding new syntax rules and enabling syntax checker for CSS files.',
        'Helped increase code coverage by 40% by writing over 600 unit tests. Improved code readability and data flow by adding missing data types. ',
        'Improved code quality, readability and data flow and reduced risk of cyclic dependencies by refactoring code, splitting up monolithic service into smaller services.',
        'Improved app security by creating a service to check no personal information is saved to local storage.',
        'Improved compatibility of application with older browsers like IE11 using polyfills and created workarounds for IE11 bugs.'
      ]
    },
    {
      jobTitle: 'Full Stack Developer',
      agency: 'IBM CIC',
      client: 'HMRC',
      startDate: '09/2018',
      endDate: '03/2020',
      location: 'Hursley, UK',
      description: [
        'Java 8, Junit, Maven, Angular.js, Angular 7, HTML, SCSS, JavaScript, TypeScript Jasmine, Karma, NPM, React Native, Redux, MongoDB, Docker, Kubernetes, Conductor, Git, Jira, Agile, AWS Lambda, Python',
        'Migrated existing UI to Angular 7 and developed a new prototype UI in Angular framework to demo potential new features.',
        'Experimented with new ideas and designs and investigated how new technologies could be utilised.',
        'Created a prototype mobile app in React Native with MongoDB for health care client in 3 months.',
        'Orchestrated the running of Docker containers along with Java application using Netflix Conductor.',
        'Supervised new team members and got them up to speed on project and processes.',
        'Worked closely with business analysts and consulted regularly with client on project status, new proposals and technical and design issues. ',
      ]
    },
    {
      jobTitle: 'Research Student Theoretical Physics',
      agency: '',
      client: 'The University Of Sheffield',
      startDate: '06/2017',
      endDate: '08/2017',
      location: 'Sheffield, UK',
      description: [
        'Won scholarship of £1080 to complete research over summer as part of Sheffield Undergraduate Research Experience.',
        'Created numerical algorithm in MATLAB that finds mathematical expressions, Bell Inequalities, that can help to determine whether particles are quantum entangled.',
        'Discovered new Bell Inequalities and contributed original research.',
        'Presented research at the Sheffield Undergraduate Research Experience SURE and the British Conference of Undergraduate Research BCUR.',
      ]
    }
  ]

  certificates = [
    'https://udemy-certificate.s3.amazonaws.com/image/UC-ee3b01bd-a9be-4fa8-b108-4eca59409086.jpg',
    'https://udemy-certificate.s3.amazonaws.com/image/UC-48f5a81f-7c33-4c19-81ed-7535af566712.jpg'
  ]

  ngOnInit(): void {
  }

}
