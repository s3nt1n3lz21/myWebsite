import { Component, Input, OnInit } from '@angular/core';
import { IEducation, emptyIEducation } from 'src/app/model/IEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public education: IEducation = emptyIEducation();
  @Input() set educationInput(education: IEducation) {
    this.education = education;
  }
}
