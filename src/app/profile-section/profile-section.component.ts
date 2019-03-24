import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../model/PersonalInfo';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {

  personalInfo = PersonalInfo.info;

  constructor() { }

  ngOnInit() {
  }

}
