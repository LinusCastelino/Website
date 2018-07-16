import { Component, OnInit } from '@angular/core';
import { SocialsInfo, ISocialsInfo } from '../model/SocialsInfo';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {

  logoImgColor = 'white';
  socialsInfo: ISocialsInfo[];

  constructor() {
    const socials = new SocialsInfo(this.logoImgColor);
    this.socialsInfo = socials.info;
   }

  ngOnInit() {
  }

}
