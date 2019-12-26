import { Component, OnInit } from '@angular/core';
import { IEducation } from '../model/IEducation';
import { MatDialogConfig } from '@angular/material';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
  providers: [ PopupService ]
})
export class EducationSectionComponent implements OnInit {

  educationEvents: IEducation[] = [];

  constructor(private popupService: PopupService) {
    
    // template
    // this.educationEvents.unshift({
    //   eventLogoURL: '',
    //   eventHeader: {
    //     institute: '',
    //     degree: '',
    //     batch: ''
    //   },
    //   eventInfo: {
    //     details: []
    //   }
    // });

    this.educationEvents.unshift({
      eventLogoURL: '../../assets/images/SAHS-logo.png',
      eventHeader: {
        institute: 'St. Anne\'s High School',
        degree: 'Secondary School (S.S.C.)',
        batch: 'Class of 2009'
      },
      eventInfo: {
        details: []
      }
    });

    this.educationEvents.unshift({
      eventLogoURL: '../../assets/images/SAHS-logo.png',
      eventHeader: {
        institute: 'St. Anne\'s Junior College',
        degree: 'Higher Secondary School (H.S.C.)',
        batch: 'Class of 2011'
      },
      eventInfo: {
        details: [
          'Major - Science (Physics, Chemistry, Maths, Biology)'
        ]
      }
    });

    this.educationEvents.unshift({
      eventLogoURL: '../../assets/images/MumbaiUniversity-logo.jpg',
      eventHeader: {
        institute: 'University of Mumbai - St. Francis Institute of Technology',
        degree: 'B.E. in Compupter Engineering',
        batch: 'Class of 2015'
      },
      eventInfo: {
        details: [
          
        ]
      }
    });

    this.educationEvents.unshift({
      eventLogoURL: '../../assets/images/UB-logo.png',
      eventHeader: {
        institute: 'University at Buffalo - The State University of New York',
        degree: 'M.S. in Computer Science',
        batch: 'Class of 2020 (Fall 2018 student)'
      },
      eventInfo: {
        details: [
          '<b>GPA - 3.92/4.0</b>'
        ]
      }
    });

    

    // this.educationEvents.push({
    //   eventHeader: {
    //     batch: 'Class of 2020 (Fall 2018 student)',
    //     details: [
    //       '<a href="https://engineering.buffalo.edu/computer-science-engineering.html" target="_blank">University at Buffalo</a>',
    //       'Graduate School',
    //       'M.S. in Computer Science'
    //     ]
    //   },
    //   eventInfo: {
    //     univ: 'University at Buffalo',
    //     details: []
    //   },
    //   eventLogoUrl: ''
    // });

    // this.educationEvents.push({
    //   eventHeader: {
    //     batch: 'Class of 2015',
    //     details: [
    //       '<a href="http://sfitengg.org/" target="_blank">St. Francis Institute of Technology</a>',
    //       'Undergraduate School',
    //       'B.E. in Compupter Engineering'
    //     ]
    //   },
    //   eventInfo: {
    //     univ: 'University of Mumbai',
    //     details: [
    //       'Major - Computer Engineering',
    //       'Click <a href="https://drive.google.com/file/d/0B40x1VYdbWc8VlBqMVhRMFRoeTQ/view?usp=sharing" ' +
    //       'target="_blank">here</a> to view Degree Certificate.',
    //       'Click <a href="#">here</a> to view projects undertaken in undergrad school.',
    //       'Click <a href="#">here</a> to view extra-curricular activities participated in.'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.educationEvents.push({
    //   eventHeader: {
    //     batch: 'Class of 2011',
    //     details: [
    //       'Higher Secondary School (H.S.C.)'
    //     ]
    //   },
    //   eventInfo: {
    //     univ: 'St. Anne\'s Junior College',
    //     details: [
    //       'Major - Science (Physics, Chemistry, Maths, Biology)'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.educationEvents.push({
    //   eventHeader: {
    //     batch: 'Class of 2009',
    //     details: [
    //       'Secondary School (S.S.C.)'
    //     ]
    //   },
    //   eventInfo: {
    //     univ: 'St. Anne\'s High School',
    //     details: []
    //   },
    //   eventLogoUrl: ''
    // });
  }

  ngOnInit() {
  }

  // public openExtCurAct(): boolean {
  //   const matDialogConfig = new MatDialogConfig();
  //   matDialogConfig.data = {hello: 'The is extCurAct'};
  //   this.popupService.openMatDialog(matDialogConfig);
  //   return false;
  // }

  // public openUGradProjs(): boolean {
  //   const matDialogConfig = new MatDialogConfig();
  //   matDialogConfig.data = {hello: 'The is UGradProjs'};
  //   this.popupService.openMatDialog(matDialogConfig);
  //   return false;
  // }

}
