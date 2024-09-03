import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/model/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {}

  public skills: ISkill[] = []
  @Input() set skillsInput(skills: ISkill[]) {
    this.skills = skills;
  }

  private overlapThresholdYears = 4; 

  isOverlap(value: number): boolean {
    return value < this.overlapThresholdYears;
  }
}
