import { Component, OnInit } from '@angular/core';
import { MailerService } from '../services/mailer.service';
import { NgForm } from '@angular/forms';
import { Message } from '../model/Message';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.css'],
  providers:[ MailerService ]
})
export class ContactMeSectionComponent implements OnInit {

  private message : Message;

  constructor(private mailerService : MailerService) { 
  }

  ngOnInit() {
  }

  public sendMessage(contactMeForm : NgForm): void{
    console.log("Inside : ContactMeSectionComponent.sendMessage()");
    //console.log(contactMeForm);

    this.message = {
      name : contactMeForm.form.controls.name.value,
      email : contactMeForm.form.controls.email.value,
      phone : contactMeForm.form.controls.phone.value,
      subject : contactMeForm.form.controls.subject.value,
      text : contactMeForm.form.controls.message.value
    }

    //console.log(this.message);
    this.mailerService.sendMessage(this.message);
  }
}
