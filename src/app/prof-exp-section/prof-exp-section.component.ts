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
    //     event:{
    //       details: []
    //     }
    //   }
    // )

    this.profExpEvents.unshift(
      {
        eventLogoURL: '../../assets/images/TCS-logo.png',
        eventHeader:{
          organization: 'Tata Consultancy Services Pvt. Ltd.',
          designation: 'Full-Stack Developer',
          role: 'A.T.G. Developer, E-Commerce - Retail & C.P.G.',
          period: 'Jan\'16 - Jul\'18'
        },
        event:{
          details: [
            'Worked as an Oracle A.T.G. Web Commerce developer, implementing software modules for the U.K. and Poland market E-Commerce webstores of ToysRUs.',
            // 'Click <a href="#">here</a> for detailed responsibilities.',
            'Presented with the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8WGxkQXNkOC11aFE/view?usp=sharing" ' +
            'target="_blank">\'iONCommitment\'</a> award acknowledging the contributions made towards the project.'
          ]
        }
      }
    );

    // this.profExpEvents.unshift(
    //   {
    //     eventLogoURL: '',
    //     eventHeader:{
    //       organization: '',
    //       designation: '',
    //       role: '',
    //       period: ''
    //     },
    //     event:{
    //       details: []
    //     }
    //   }
    // );

    // this.profExpEvents.unshift(
    //   {
    //     eventLogoURL: '',
    //     eventHeader:{
    //       organization: '',
    //       designation: '',
    //       role: '',
    //       period: ''
    //     },
    //     event:{
    //       details: []
    //     }
    //   }
    // );

    // this.profExpEvents.push(
    //   {
    //     eventLogoUrl: '',
    //     eventHeader:{
    //       designation: '',
    //       organization: '',
    //       role: '',
    //       period: ''
    //     },
    //     event:{
    //       details: []
    //     }
    //   }
    // );



    // this.profExpEvents.push({
    //   eventHeader : {
    //     time: '',
    //     designation: ''
    //   },
    //   event : {
    //     title: ``,
    //     desc: [
    //       '',
          
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.profExpEvents.push({
    //   eventHeader : {
    //     time: 'Jan\'16 - Jul\'18',
    //     designation: 'A.T.G. Developer, E-Commerce - Retail & C.P.G.'
    //   },
    //   event : {
    //     title: `ToysRUs <a href=\"#\">UK</a> & <a href=\"#\">Poland</a>`,
    //     desc: [
    //       'Worked as an Oracle A.T.G. Web Commerce developer at T.C.S. for the U.K. and Poland markets of ToysRUs.',
    //       'Click <a href="#" click="alert()">here</a> for detailed responsibilities.',
    //       'Presented with the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8WGxkQXNkOC11aFE/view?usp=sharing" ' +
    //       'target="_blank">\'iONCommitment\'</a> award acknowledging the contributions made towards the project.'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.profExpEvents.push({
    //   eventHeader : {
    //     time: 'Jul\'16',
    //     designation: 'Contributor'
    //   },
    //   event : {
    //     title: 'CodeVita\'16',
    //     desc: [
    //       'Participated as a contributor in a crowd sourcing program for CodeVita\'16, a hackathon organized by T.C.S. annually, by ' +
    //       'creating questions/problems, optimal solutions and test cases. These questions were presented to the participants as ' +
    //       'challenges.',
    //       'Attained the 7th position among 100+ participants considering the number and the complexity of the selected questions.',
    //       'Received a <a href="https://drive.google.com/file/d/0B40x1VYdbWc8RTduS0NDcEVDeUE/view?usp=sharing" target="_blank">\'Special ' +
    //       'Initiative\'</a> award for the same.'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.profExpEvents.push({
    //   eventHeader : {
    //     time: 'Dec\'15',
    //     designation: 'Learning Enabler (L.E.)'
    //   },
    //   event : {
    //     title: 'Initial Learning Program (I.L.P.)',
    //     desc: [
    //       'Appointed as a Learning Enabler for a period of 1 month to assist the I.L.P. faculty in training new trainees at the I.L.P. ' +
    //       'centre.',
    //       'Responsibilities involved conducting sessions on software development life cycle and specific programming modules, helping ' +
    //       'trainees with difficulties in project assignments, and evaluating periodic assessments.',
    //       'Offered the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8S2pYQkpHZHBwN00/view?usp=sharing" target="_blank" > ' +
    //       '\'Champions of I.L.P.\'</a> award.'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });

    // this.profExpEvents.push({
    //   eventHeader : {
    //     time: 'Oct\'15 - Nov\'15',
    //     designation: 'Trainee'
    //   },
    //   event : {
    //     title: 'Initial Learning Program (I.L.P.)',
    //     desc: [
    //       'Attended the Initial Learning Program(I.L.P.) at TCS Trivandrum and completed an extensive training regime on .NET technology.',
    //       'Presented a mini project to stakeholders which involved creating an E-Recruitment system in a team of 4 members.',
    //       'Awarded the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8ZnY2ZVNKVi16MGs/view?usp=sharing" target="_blank">\'Star ' +
    //       'of the Learner\'s Group\'</a> award for securing  a top rating on completing the training.',
    //       'Nominated by batchmates and instructors as the <a href="https://drive.google.com/file/d/0B40x1VYdbWc8bERDeXZCaGJvTFU' +
    //       '/view?usp=sharing" target="_blank">\'L.I.R.E.L.\'</a> awardee.'
    //     ]
    //   },
    //   eventLogoUrl: ''
    // });
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
