import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/model/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: ISkill[] = []
  @Input() set skillsInput(skills: ISkill[]) {
    this.skills = skills;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
