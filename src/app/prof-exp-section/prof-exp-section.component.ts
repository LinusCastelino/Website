import { Component, OnInit } from '@angular/core';
import { IProfExp } from '../model/IProfExp';

@Component({
  selector: 'app-prof-exp-section',
  templateUrl: './prof-exp-section.component.html',
  styleUrls: ['./prof-exp-section.component.css']
})
export class ProfExpSectionComponent implements OnInit {

  profExpEvents : IProfExp[] = [];

  constructor() {
    this.profExpEvents.push({
      eventHeader : {
        time:'Jan\'16 - Present',
        designation:'A.T.G. Developer, E-Commerce - Retail & C.P.G.'
      },
      event : {
        title: `ToysRUs <a href=\"#\">UK</a> & <a href=\"#\">Poland</a>`,
        desc:[
          'Working as an Oracle A.T.G. Web Commerce developer at T.C.S. for the U.K. and Poland markets of ToysRUs.',
          'Click <a href="#">here</a> for detailed responsibilities.',
          'Presented with the <a href="#">\'iONCommitment\'</a> award acknowledging the contributions made towards the project.'
        ]
      },
      eventLogoUrl:''
    });

    this.profExpEvents.push({
      eventHeader : {
        time:'Jul\'16',
        designation:'Contributor'
      },
      event : {
        title: 'CodeVita\'16',
        desc:[
          'Participated as a contributor in a crowd sourcing program for CodeVita\'16, a hackathon organized by T.C.S. annually, by creating questions/problems, optimal solutions and test cases. These questions were presented to the participants as challenges.',
          'Attained the 7th position among 100+ participants considering the number and the complexity of the selected questions.',
          'Received a <a href="#">\'Special Initiative\'</a> award for the same.'
        ]
      },
      eventLogoUrl:''
    });

    this.profExpEvents.push({
      eventHeader : {
        time:'Dec\'15',
        designation:'Learning Enabler (L.E.)'
      },
      event : {
        title: 'Initial Learning Program (I.L.P.)',
        desc:[
          'Appointed as a Learning Enabler for a period of 1 month to assist the I.L.P. faculty in training new trainees at the I.L.P. centre.',
          'Responsibilities involved conducting sessions on software development life cycle and specific programming modules, helping trainees with difficulties in project assignments, and evaluating periodic assessments.',
          'Offered the <a href="#">\'Champions of I.L.P.\'</a> award.'
        ]
      },
      eventLogoUrl:''
    });

    this.profExpEvents.push({
      eventHeader : {
        time:'Oct\'15 - Nov\'15',
        designation:'Trainee'
      },
      event : {
        title: 'Initial Learning Program (I.L.P.)',
        desc:[
          'Attended the Initial Learning Program(I.L.P.) at TCS Trivandrum and completed an extensive training regime on .NET technology.',
          'Presented a mini project to stakeholders which involved creating an E-Recruitment system in a team of 4 members.',
          'Awarded the <a href="#">\'Star of the the Learner\'s Group\'</a> award for securing  a top rating on completing the training.',
          'Nominated by batchmates and instructors as the <a href="#">\'L.I.R.E.L.\'</a> awardee.'
        ]
      },
      eventLogoUrl:''
    });
   }    //constructor

  ngOnInit() {
  }

}
