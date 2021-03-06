import { Component, OnInit } from '@angular/core';
import { ISkill } from '../model/ISkill';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})

export class SkillsSectionComponent implements OnInit {

  skills: ISkill[];

  constructor() {
    this.skills = [];
    this.skills.push({skillTitle: 'Java Programming', level: 'Expert'});
    this.skills.push({skillTitle: 'Oracle Web Commerce', level: 'Expert'});
    this.skills.push({skillTitle: 'SQL', level: 'Expert'});
    this.skills.push({skillTitle: 'Shell Scripting', level: 'Proficient'});
    this.skills.push({skillTitle: 'JBoss', level: 'Proficient'});
    this.skills.push({skillTitle: 'JavaScript, jQuery', level: 'Intermediate'});
    this.skills.push({skillTitle: 'REST/SOAP', level: 'Intermediate'});
    this.skills.push({skillTitle: 'ANT', level: 'Intermediate'});
  }

  ngOnInit() {
  }

}
