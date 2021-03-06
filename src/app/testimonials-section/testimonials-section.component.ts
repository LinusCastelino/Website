import { Component, OnInit } from '@angular/core';
import { ITestifier } from '../model/ITestifier';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {

  testifiers: ITestifier[];

  constructor() {
    this.testifiers = [];

    this.testifiers.push({
      name: 'Chirag Ashar',
      role: 'E-Commerce Consultant at ToysRUs',
      organization: 'Tata Consultancy Services',
      imageUrl: '../../assets/images/Chirag-photo.webp',
      testimony: 'I have had the privilege of working with Linus for almost two years for Ecommerce ' +
                 'international implementation for toysrus. When he joined the project he was barely ' +
                 'inducted in TCS and the project demanded a lot more from him. I should say that he ' +
                 'went a long way from there in contributing to the project. Right from the beginning ' +
                 'of the project he has shown great ability to learn and grow. Linus is brilliant and ' +
                 'learns very quickly. He is tech savvy and proficient with Oracle ATG commerce. He has ' +
                 'a great attitude and is always willing to go the extra mile to get the job done. He ' +
                 'quickly grasps new technical concepts and puts them to effective use to provide solutions ' +
                 'to complex business issues. He is very responsive, and communicates status effectively.I ' +
                 'would say that he would be a phenomenal asset to any company.'
    });

    this.testifiers.push({
      name: 'Devdutt Parab',
      role: 'Delivery Manager',
      organization: 'Tata Consultancy Services',
      imageUrl: '../../assets/images/Devdutt-photo.webp',
      testimony: 'I have worked with Linus for the past one year, as his manager. In this time, I have ' +
                 'found Linus to be a smart, hard-working team member. He is keen on learning and picks ' +
                 'up new systems/concepts quickly. Ever ready to do what is required for the project, we ' +
                 'have come to count on him when unexpected events occur in the project and we need flexibility ' +
                 'to address the issue. Good at ensuring assigned tasks are completed, Linus has also been ' +
                 'a regular contributor of ideas on improving the processes and systems employed by our customer. ' +
                 'Very good at communicating with all stakeholders, he is a definite asset for any team.'
    });

    this.testifiers.push({
      name: 'Kevin Chheda',
      role: 'IT Consultant',
      organization: 'Tata Consultancy Services',
      imageUrl: '../../assets/images/Kevin-photo.webp',
      testimony: 'Linus is having very good technical, analytical, interpersonal and problem solving ' +
                 'skills. He is detail oriented, punctual, dedicated resource. His communications be it ' +
                 'verbal or written are very clear. He is quick and enthusiastic learner. He reports the ' +
                 'status of work time to time and ensures to complete before or on time. He understands ' +
                 'the things as WHOLE which helps him grow functional knowledge of how thing works. It was ' +
                 'pleasure to have team member like him.'
    });
  }

  ngOnInit() {
  }

}
