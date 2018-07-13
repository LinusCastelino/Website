import { Component, OnInit } from '@angular/core';
import { SocialsInfo, ISocialsInfo } from '../model/SocialsInfo';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {

  logoImgColor: string = 'white';
  socialsInfo: ISocialsInfo[];

  constructor() {
    var socials = new SocialsInfo(this.logoImgColor);
    this.socialsInfo = socials.info;
   }

  ngOnInit() {
  }

}
