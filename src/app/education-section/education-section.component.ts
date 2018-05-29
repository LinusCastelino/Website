import { Component, OnInit } from '@angular/core';
import { IEducation } from '../model/IEducation';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  educationEvents : IEducation[] = [];

  constructor() {
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
          '<a href="#">St. Francis Institute of Technology</a>',
          'Undergraduate School',
          'Bachelor\'s of Engineering'
        ]
      },
      eventInfo:{
        univ: 'University of Mumbai',
        details: [
          'Major - Computer Engineering',
          'Click <a href="#" target="_blank">here</a> to view Degree Certificate.',
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

}
