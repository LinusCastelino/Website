import { Component, OnInit } from '@angular/core';
import { IProfExp } from '../model/IProfExp';
// import { MatDialogConfig } from '@angular/material';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-prof-exp-section',
  templateUrl: './prof-exp-section.component.html',
  styleUrls: ['./prof-exp-section.component.css'],
  providers: [ PopupService ]
})
export class ProfExpSectionComponent implements OnInit {

  profExpEvents: IProfExp[] = [];

  constructor(private popupService: PopupService) {
    //template from IProfExp interface
    // this.profExpEvents.push(
    //   {
    //     eventLogoURL: '',
    //     eventHeader:{
    //       organization: '',
    //       designation: '',
    //       role: '',
    //       period: ''
    //     },
    //     eventInfo:{
    //       details: []
    //     }
    //   }
    // )

    this.profExpEvents.unshift(
      {
        eventLogoURL: '../../assets/images/TCS-logo.png',
        eventHeader:{
          organization: 'Tata Consultancy Services Pvt. Ltd.',
          designation: 'Systems Engineer (Full-Stack Developer)',
          role: 'A.T.G. Developer, E-Commerce - Retail & C.P.G.',
          period: 'January 2016 - July 2018'
        },
        eventInfo:{
          details: [
            'Worked as an Oracle A.T.G. Web Commerce developer, implementing software modules for the U.K. and Poland market ' + 
            'E-Commerce webstores of ToysRUs.',
            // 'Click <a href="#">here</a> for detailed responsibilities.',
            
            // 'Presented with the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8WGxkQXNkOC11aFE/view?usp=sharing" ' +
            // 'target="_blank">\'iONCommitment\'</a> award acknowledging the contributions made towards the project.',
            // 'Participated as a contributor in a crowd sourcing program for CodeVita\'16, a hackathon organized by T.C.S. annually, by ' +
            // 'creating questions/problems, optimal solutions and test cases. These questions were presented to the participants as ' +
            // 'challenges.',
            // 'Attained the 7th position among 100+ participants considering the number and the complexity of the selected questions.',
            // 'Received a <a href="https://drive.google.com/file/d/0B40x1VYdbWc8RTduS0NDcEVDeUE/view?usp=sharing" target="_blank">\'Special ' +
            // 'Initiative\'</a> award for the same.',
            // 'Appointed as a Learning Enabler for a period of 1 month to assist the I.L.P. faculty in training new trainees at the I.L.P. ' +
            // 'centre.',
            // 'Responsibilities involved conducting sessions on software development life cycle and specific programming modules, helping ' +
            // 'trainees with difficulties in project assignments, and evaluating periodic assessments.',
            // 'Offered the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8S2pYQkpHZHBwN00/view?usp=sharing" target="_blank" > ' +
            // '\'Champions of I.L.P.\'</a> award.'
          ]
        }
      }
    );

    this.profExpEvents.unshift(
      {
        eventLogoURL: '../../assets/images/Salesforce-logo.png',
        eventHeader:{
          organization: 'Salesforce.com, Inc.',
          designation: 'Software Developer - Intern',
          role: 'Salesforce Cloud Developer - BizTech Org',
          period: 'May 2019 - August 2019'
        },
        eventInfo:{
          details: [
            'Contributed is developing software modules and implementing spring stories for the Salesforce in-house Real Estate ' + 
            'Management System (REMS).',
            'Achieved the title for a Trailhead Ranger.'
          ]
        }
      }
    );

    this.profExpEvents.unshift(
      {
        eventLogoURL: '../../assets/images/SUNYRF-logo.png',
        eventHeader:{
          organization: 'SUNY Research Foundation',
          designation: 'Research Assistant (University at Buffalo)',
          role: 'Full-Stack Developer',
          period: 'January 2019 - January 2020'
        },
        eventInfo:{
          details: [
            'Working as a Research Assistant and a Full Stack developer for OneDataShare Project - a research project funded by NSF ' + 
            'and IBM aimed at developing an MFT (Managed File Transfer system) to enhance and improve high-volume data sharing across ' + 
            'different protocols.'
          ]
        }
      }
    );
   }    // constructor

  ngOnInit() {
  }

  // public openDetailedResp(): boolean {
  //   const matDialogConfig = new MatDialogConfig();
  //   matDialogConfig.data = {hello: 'The is DetailedResp'};
  //   this.popupService.openMatDialog(matDialogConfig);
  //   return false;
  // }
}
