import { Component, OnInit } from '@angular/core';
import { IHeaderNav } from '../model/IHeaderNav';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  headerNavs: IHeaderNav[];

  constructor() {
    this.headerNavs = new Array();

    this.headerNavs.push({
      title: 'Professional Experience',
      hrefUrl: 'profExpContainer'
    });

    this.headerNavs.push({
      title: 'Education',
      hrefUrl: 'educationContainer'
    });

    this.headerNavs.push({
      title: 'Skills',
      hrefUrl: 'skillsContainer'
    });

    this.headerNavs.push({
      title: 'Testimonials',
      hrefUrl: 'testimonialsContainer'
    });

    this.headerNavs.push({
      title: 'Contact Me',
      hrefUrl: 'contactMeContainer'
    });
   }

  ngOnInit() {
  }

}
