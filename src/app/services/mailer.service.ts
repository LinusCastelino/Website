import { Injectable } from '@angular/core';
import { IMessage } from '../model/IMessage';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private _http: Http) { }

  public sendMessage(message: IMessage): Observable<any> {
    // console.log('Inside : MailerService.sendMessage()');
    // console.log(message.name);
    // console.log(message.email);
    // console.log(message.phone);
    // console.log(message.subject);
    // console.log(message.text);

    return this._http.post('/sendEmail', message);
  }
}
