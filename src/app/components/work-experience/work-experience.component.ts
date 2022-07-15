import { Component, Input, OnInit } from '@angular/core';
import { emptyWorkExperience, IWorkExperience } from 'src/app/model/IWorkExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public workExperience: IWorkExperience = emptyWorkExperience()
  @Input() set workExperienceInput(workExperience: IWorkExperience) {
    this.workExperience = workExperience;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
