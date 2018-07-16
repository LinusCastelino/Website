import { Component, OnInit } from '@angular/core';
import { IEducation } from '../model/IEducation';
import { MatDialogConfig } from '@angular/material';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  educationEvents : IEducation[] = [];

  constructor(private popupService : PopupService) {
    this.educationEvents.push({
      eventHeader:{
        batch:'Fall 2018',
        details: []
      },
      eventInfo:{
        univ: 'Master\'s in Computer Science Aspirant',
        details: []
      },
      eventLogoUrl: ''
    });

    this.educationEvents.push({
      eventHeader:{
        batch:'Class of 2015',
        details: [
          '<a href="http://sfitengg.org/" target="_blank">St. Francis Institute of Technology</a>',
          'Undergraduate School',
          'Bachelor\'s of Engineering'
        ]
      },
      eventInfo:{
        univ: 'University of Mumbai',
        details: [
          'Major - Computer Engineering',
          'Click <a href="https://drive.google.com/file/d/0B40x1VYdbWc8VlBqMVhRMFRoeTQ/view?usp=sharing" target="_blank">here</a> to view Degree Certificate.',
          'Click <a href="#">here</a> to view projects undertaken in undergrad school.',
          'Click <a href="#">here</a> to view extra-curricular activities participated in.'
        ]
      },
      eventLogoUrl: ''
    });

    this.educationEvents.push({
      eventHeader:{
        batch:'Class of 2011',
        details: [
          'Higher Secondary School (H.S.C.)'
        ]
      },
      eventInfo:{
        univ: 'St. Anne\'s Junior College',
        details: [
          'Major - Science (Physics, Chemistry, Maths, Biology)'
        ]
      },
      eventLogoUrl: ''
    });

    this.educationEvents.push({
      eventHeader:{
        batch:'Class of 2009',
        details: [
          'Secondary School (S.S.C.)'
        ]
      },
      eventInfo:{
        univ: 'St. Anne\'s High School',
        details: []
      },
      eventLogoUrl: ''
    });
  }

  ngOnInit() {
  }

  public openExtCurAct() : boolean{
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.data = {hello: 'The is extCurAct'};
    this.popupService.openMatDialog(matDialogConfig);
    return false;
  }

  public openUGradProjs() : boolean{
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.data = {hello: 'The is UGradProjs'};
    this.popupService.openMatDialog(matDialogConfig);
    return false;
  }
  
}
