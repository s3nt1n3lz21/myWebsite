import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IAward } from 'src/app/model/IAward';
import { IEducation } from 'src/app/model/IEducation';
import { IWorkExperience } from 'src/app/model/IWorkExperience';
import * as d3 from 'd3';
import { ISkill } from 'src/app/model/ISkill';
import { ICertificate } from 'src/app/model/ICertificate';
import { ICarouselSlide } from 'src/app/model/ICarouselSlide';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  deployedAppURLs = [
    'http://django-blog-env.eba-q3a5e3nb.eu-west-2.elasticbeanstalk.com/'
  ]

  // skills = {
  //   "Git": 3.5,
  //   "JavaScript": 3.25,
  //   "HTML": 3,
  //   "SCSS": 3,
  //   "NPM": 3,
  //   "Agile": 2.75,
  //   "TypeScript": 2.5,
  //   "Angular 12": 2.5,
  //   "Azure DevOps": 1.5,
  //   "Java 8": 1.5,
  //   "Maven": 1.5,
  //   "Jasmine/Karma": 1.25,
  //   "Python": 1,
  //   "Docker": 0.5,
  //   "JUnit": 0.5
  // }

  // N-2
  // 1
  // 2

  // N-3
  // 1   1  
  //   2    50%

  // N-4
  // 1     50%
  // 2 2   0% 100%
  //  3    50%

  // 2
  // 1 3
  // 0

  // 0
  // -1 +1
  // 0

  // N-5
  // Z-index //left   // relative index
  // 1 1    30% 70%      2 3
  // 2 2   10% 90%       1 4
  // 3      50%           0

  // N 4 MIN 1
  // N 5 Min 2
  // N 6 MIN 2

  // -2 +2
  // -1 +1
  // 0

  // N-6
  // Z-index  // left     //relativeindex
  // 1        // 50%      // 3
  // 2 2      // 27% 83%  // 2 4
  // 3 3      // 27% 83%  // 1 5
  // 4        // 50%      // 0

  // N-7
  // Z-index   // left
  // 1 1       // 100
  // 2 2   66
  // 3 3   33
  // 4     0

  // 

  // Highest Zindex/current slide = Math.ceil((N + 1) / 2)
  // Z-index from relativeIndex 

  public get zIndexCurrentSlide() {
    return Math.ceil((this.carouselSlides.length + 1)/2)
  }

  public getZIndexFromIndex(index: number) {
    const indexDifference = Math.abs(this.currentSlideIndex - index);
    // console.log('this.zIndexCurrentSlide: ', this.zIndexCurrentSlide);
    console.log('//////////////////')
    console.log('index: ', index);
    console.log('indexDifference: ', indexDifference);
    let isEvenNumberItems = this.carouselSlides.length % 2 == 0;
    let zindex = 0;
    if (indexDifference >= this.zIndexCurrentSlide) {
      if (isEvenNumberItems) {
        zindex = indexDifference - this.zIndexCurrentSlide + 2;
      } else {
        zindex = indexDifference - this.zIndexCurrentSlide + 1;
      }
    } else {
      zindex = this.zIndexCurrentSlide - indexDifference;
    }
    console.log('zindex: ', zindex);
    return zindex;
  }

  // Top css property
  public getYPositionFromIndex(index: number) {
    const maxTopDifference = 50; // e.g. maxTopDifference = 100 means top 0% for current slide and 100% for furthest back slide
    const topPerIndex = maxTopDifference / (this.zIndexCurrentSlide - 1);
    // console.log('this.zIndexCurrentSlide: ', this.zIndexCurrentSlide);
    // console.log('topPerIndex: ', topPerIndex);
    return maxTopDifference - (this.zIndexCurrentSlide - this.getZIndexFromIndex(index)) * topPerIndex;
  }

  // 0
  // -1 +1
  // 0

  // Pass in the relative index e.g. +1 +2 -1 -2 ...
  private wrapLeftValue(x, min, max, step): number {
    const range = max - min;
    if (x < min) {
      x = min + (min - x);
      return this.wrapLeftValue(x, min, max, step);
    } else if (x > max) {
      x = max - (x - max);
      return this.wrapLeftValue(x, min, max, step);
    } else if (x < (min - range)) {
      x = x + range;
    } else if (x > (max + range)) {
      x = x - range;
    } else {
      return x;
    }
  }

  // Left css property
  public getXPositionFromIndex(index: number) {
    const maxLeftDifference = 100; // e.g. maxTopDifference = 100 means top 0% for current slide and 100% for furthest back slide
    const leftPerIndex = maxLeftDifference / (this.carouselSlides.length);
    // console.log('/////////////////////////')
    // console.log('this.zIndexCurrentSlide: ', this.zIndexCurrentSlide);
    // console.log('this.currentSlideIndex: ', this.currentSlideIndex);
    // console.log('index: ', index);
    // console.log('leftPerIndex: ', leftPerIndex);
    const indexDifference = this.currentSlideIndex - index;
    // console.log('indexDifference: ', indexDifference);
    // const wrappedIndexDifference = this.wrapIndex(indexDifference, -1, 1);
    // console.log('wrappedIndexDifference: ', wrappedIndexDifference);
    // const wrappedIndexDifference = 
    const leftUnwrappedValue = 50 + (indexDifference) * leftPerIndex*2;
    // console.log('leftUnwrappedValue: ', leftUnwrappedValue);
    const wrappedLeftValue = this.wrapLeftValue(leftUnwrappedValue, 0, 100, 2*leftPerIndex);
    // console.log('wrappedLeftValue: ', wrappedLeftValue);

    // let leftValue = 0;
    // if (leftUnwrappedValue > 100) {
    //   leftValue = 100 - (leftUnwrappedValue - 100);
    // } else if (leftUnwrappedValue < 0) {
    //   leftValue = 0 + (0 - leftUnwrappedValue);
    // } else {
    //   leftValue = leftUnwrappedValue;
    // }
    // console.log('leftValue: ', leftValue);
    return wrappedLeftValue;
  }

  carouselSlides: ICarouselSlide[] = [
    {
      title: '',
      filename: 'home.png',
      type: 'image-pair',
      src: ''
    },
    {
      title: '',
      filename: 'countryRiskHome.png',
      type: 'image-pair',
      src: ''
    },
    {
      title: '',
      filename: 'countryRiskAnalyse.png',
      type: 'image-pair',
      src: ''
    },
    {
      title: '',
      filename: 'countryRiskAnalyseSidePanel.png',
      type: 'image-pair',
      src: ''
    },
    {
      title: '',
      filename: '',
      src: 'https://media.giphy.com/media/Q5uZN90CfuiF9RSKcd/giphy.gif',
      type: 'image'
    },
    {
      title: '',
      filename: '',
      src: 'assets/images/poster.jpg',
      type: 'image'
    }
  ];

  currentSlideIndex: number = 0;

  public get currentSlide(): ICarouselSlide {
    return this.carouselSlides[this.currentSlideIndex];
  }

  skills: ISkill[] = [
    {
      name: 'Git',
      value: 4
    },
    {
      name: 'JavaScript',
      value: 4
    },
    {
      name: 'HTML',
      value: 3.5
    },
    {
      name: 'SCSS',
      value: 3.5
    },
    {
      name: 'NPM',
      value: 3.5
    },
    {
      name: 'Agile',
      value: 3.25
    },
    {
      name: 'TypeScript',
      value: 3
    },
    {
      name: 'Angular 12',
      value: 3
    },
    {
      name: 'Jasmine/Karma',
      value: 2
    },
    {
      name: 'Azure DevOps',
      value: 1.5
    },
    {
      name: 'Java 8',
      value: 1.5
    },
    {
      name: 'Maven',
      value: 1.5
    },
    {
      name: 'Open Source',
      value: 1.5
    },
    {
      name: 'JUnit',
      value: 1.25
    },
    {
      name: 'Python',
      value: 1
    },
    {
      name: 'BrowserStack',
      value: 0.75
    },
    {
      name: 'AG Grid',
      value: 0.75
    },
    {
      name: 'JSPDF',
      value: 0.75
    },
    {
      name: 'Jest',
      value: 0.75
    },
    {
      name: 'NX Monorepo',
      value: 0.75
    },
    {
      name: 'Bitbucket',
      value: 0.75
    },
    {
      name: 'NGRX',
      value: 0.75
    },
    {
      name: 'Docker',
      value: 0.5
    },
    // {
    //   name: 'C++',
    //   value: 0.25
    // },
    // {
    //   name: 'React Native',
    //   value: 0.75
    // },
    // {
    //   name: 'Redux',
    //   value: 0.75
    // },
    // {
    //   name: 'VirtualBox',
    //   value: 0.25
    // },
    // {
    //   name: 'Conductor',
    //   value: 0.25
    // },
    // {
    //   name: 'HTTP',
    //   value: 1.75
    // },
  ]

  workExperiences: IWorkExperience[] = [
    {
      jobTitle: 'Angular Developer',
      agency: 'Ronald James Group',
      client: 'Verisk Maplecroft',
      startDate: '08/2022',
      endDate: '03/2023',
      location: 'Remote',
      description: [
        'Angular 12, TypeScript, HTML, SCSS, NPM, Git, Agile Sprints, Jira, Bitbucket, RXJS, NX Monorepo, Jasmine, Jest, JSPDF, AG Grid, BrowserStack',
        'Implemented rebranding of website, updating layout, colors, icons and logos',
        'Modified behaviour and styles of AG Grid Tables using custom components and icons',
        'Updated printed document styles and content using JSPDF',
        'Investigated and helped migrate to Google Analytics 4',
        'Fixed bugs on various browsers using Browserstack',
        'Refactored and moved code and styles to NX Repo library from individual apps to create reusable components',
        'Created reusable styles using SASS Placeholders and modular SASS imports with SASS Use',
        'Implemented a reusable icon component with dynamic colours using CSS variables'
      ]
    },
    // Accesibility, tab navigation
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

  educations: IEducation[] = [
    {
      type: 'MPhys Theoretical Physics | 1st Class',
      institution: 'The University Of Sheffield',
      startDate: '2014',
      endDate: '2018',
      location: 'Sheffield, UK',
      description: 'Thesis Title - Calculation Of Tight Bell Inequalities Through Robustness'
    },
    {
      type: 'A Levels',
      institution: 'Greenhead College',
      startDate: '2012',
      endDate: '2014',
      location: 'Huddersfield, UK',
      description: 'Physics: A, Maths: A, Chemistry: A, General Studies: D, AS Further Maths: A, AS Computing: A'
    },
    {
      type: 'GCSEs',
      institution: 'Holmfirth High School',
      startDate: '2007',
      endDate: '2012',
      location: 'Holmfirth, UK',
      description: 'Physics: A, Maths: A, FSMQ Additional Maths: A, Chemistry: A, Biology: A, Statistics: B, ICT Distinction, English Language: B, English Literature: B, Geology: A, Spanish: A, Religious Studies: A'
    }
  ]

  certificates: ICertificate[] = [
    {
      name: 'RXJS',
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-48f5a81f-7c33-4c19-81ed-7535af566712.jpg',
      link: "https://www.udemy.com/certificate/UC-48f5a81f-7c33-4c19-81ed-7535af566712/"
    },
    {
      name: 'Angular',
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-ee3b01bd-a9be-4fa8-b108-4eca59409086.jpg',
      link: 'https://www.udemy.com/certificate/UC-ee3b01bd-a9be-4fa8-b108-4eca59409086/'
    },
    {
      name: 'Python',
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-98c9b09c-e16c-4723-b68a-92241fc99642.jpg',
      link: 'https://www.udemy.com/certificate/UC-98c9b09c-e16c-4723-b68a-92241fc99642/'
    },
    {
      name: 'The Numpy Stack',
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-294909d7-6411-4dcb-8787-7ba390f172d5.jpg',
      link: 'https://www.udemy.com/certificate/UC-294909d7-6411-4dcb-8787-7ba390f172d5/'
    }
  ]

  awards: IAward[] = [
    {
      title: 'Tim Richardson Memorial Prize',
      date: '2018',
      money: '£150',
      description: 'Demonstration of determination and resilience in order to fulfil academic potential.'
    },
    {
      title: 'SURE Scholarship ',
      date: '2017',
      money: '£1080',
      description: 'Awarded one of a limited number of funded research scholarships to complete a research project in Physics over summer.'
    },
    {
      title: 'Ifor Austin Prize',
      date: '2016',
      money: '£80',
      description: 'The best performance by a physics student in their second year.'
    },
    {
      title: 'Ede And Ravenscroft Prize',
      date: '2015',
      money: '£71.42',
      description: 'One of seven of the best overall performances by a student in the faculty of science in their first year.'
    },
    {
      title: 'Fiddes Prize',
      date: '2015',
      money: '£50',
      description: 'The best performance by a physics student in their first year.'
    }
  ]

  ngOnInit(): void {
    
//     var data = this.skills;


//     // set the dimensions and margins of the graph
// var margin = {top: 20, right: 30, bottom: 40, left: 90},
//     width = 1500 - margin.left - margin.right,
//     height = 800 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select(".block2")
//   .append("svg")
//   .attr("class", "reveal")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

//   // Add X axis
//   var x = d3.scaleLinear()
//     .domain([0, Math.max(...data.map(d => d.value))])
//     .range([ 0, width]);

//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//       .attr("transform", "translate(-10,0)rotate(-45)")
//       .style("text-anchor", "end");

//   // Y axis
//   var y = d3.scaleBand()
//     .domain(data.map(function(d) { return d.name }))
//     .range([ 0, height ])
//     .padding(0);

//   svg.append("g")
//     .call(d3.axisLeft(y))

//   //Bars
//   data.forEach((d) => {
//     // For each row draw circles and line
//     const range = this.range(0.25, d.value + 0.25, 0.25)
    
//     svg.selectAll("circlesBeingCreated")
//     .data(range)
//     .enter()
//     .append("circle")
//     .attr("cx", function(r){ return x(r) })
//     .attr("cy", y(d.name))
//     .attr("r", 20)
//     .attr("fill", "blue")
//   }) 

//   svg.selectAll("rectanglesBeingCreated")
//   .data(data)
//   .enter()
//   .append("rect")
//   .attr("x", x(0))
//   .attr("y", function(d) { return y(d.name) })
//   .attr("width", function(d) { return x(d.value) })
//   .attr("height", 10)
//   // .attr('stroke', 'black')
//   .attr("fill", "blue")
  



//     // .attr("x", function(d) { return x(d.Country); })
//     // .attr("y", function(d) { return y(d.Value); })
//     // .attr("width", x.bandwidth())
//     // .attr("height", function(d) { return height - y(d.Value); })
//     // .attr("fill", "#69b3a2")
//   }


//   range = (start, stop, step = 1) =>
//   Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
    this.animateBarOnShow()  
    window.addEventListener("scroll", this.animateBarOnShow);
    // this.http.get('/');

  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.animateBarOnShow);
  }

  ngAfterViewInit(): void {
    this.updateCarouselPositions();
  }
  
  updateCarouselPositions() {
    let carouselSlideElements: NodeListOf<HTMLElement> = document.querySelectorAll(".image-container");
    console.log('carouselSlideElements: ', carouselSlideElements);

    carouselSlideElements.forEach((element, index) => {
      let relativeIndex = index - this.currentSlideIndex;
      // console.log('////////////////////')
      // console.log('index: ', index);
      // console.log('relativeIndex: ', relativeIndex);
      // console.log('this.getZIndexFromIndex(index): ', this.getZIndexFromIndex(index));
      // console.log('////////////////////')

      if (relativeIndex === 0) {
        element.style.setProperty('--scale', (1 + this.getYPositionFromIndex(index)/200).toString());
      } else {
        element.style.setProperty('--scale', (1/1.4 + this.getYPositionFromIndex(index)/200).toString());
      }

      element.style.setProperty('--left', this.getXPositionFromIndex(index) + '%');
      element.style.setProperty('--top', this.getYPositionFromIndex(index) + '%');
      element.style.setProperty('--z-index', this.getZIndexFromIndex(index).toString());
    })
  }

  // Odd Number of slides
  // 1 2 3 4 5 6 7
  // relativeIndex -3-2-1 0 1 2 3  
  // z-index 1 2 3 4 3 2 1

  animateBarOnShow() {
    var reveals: NodeListOf<HTMLElement> = document.querySelectorAll(".bar");

    const colors = [
      '#2e515f',
      '#407286',
      '#5292ac',
      '#64b2d1'
    ]

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        let classNames: string[] = reveals[i].className.split(' ');
        // console.log('classNames: ', classNames)
        let animationName = classNames[1];
        // console.log('animationName: ', animationName);
        // reveals[i].style.setProperty('display', 'block');
        // reveals[i]
        reveals[i].style.setProperty('animation', animationName +' 1.2s 0.1s forwards')
        reveals[i].style.setProperty('background-color', colors[0 + (i - 0) % (colors.length - 0)])
      } else {
        reveals[i].style.removeProperty('animation')
        // reveals[i].style.setProperty('display', 'none');
      }
    }
  }

  public get getPreviousCarouselImage() {
    let previousIndex = this.currentSlideIndex;
    if (this.currentSlideIndex - 1 < 0) {
      previousIndex = this.carouselSlides.length - 1;
    } else {
      previousIndex = this.currentSlideIndex - 1;
    }
    return this.carouselSlides[previousIndex];
  }

  public get getNextCarouselImage() {
    let nextIndex = this.currentSlideIndex;
    if (this.currentSlideIndex + 1 > this.carouselSlides.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = this.currentSlideIndex + 1;
    }
    return this.carouselSlides[nextIndex];
  }

  nextCarouselImage() {
    if (this.currentSlideIndex - 1 < 0) {
      this.currentSlideIndex = this.carouselSlides.length - 1;
    } else {
      this.currentSlideIndex -= 1;
    }
    this.updateCarouselPositions();
  }

  previousCarouselImage() {
    if (this.currentSlideIndex + 1 > this.carouselSlides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex += 1;
    }
    this.updateCarouselPositions();
  }
}
