import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private matDialog: MatDialog) { }

  public openMatDialog(matDialogConfig : MatDialogConfig){
    matDialogConfig.width = 'fit-content';
    matDialogConfig.maxWidth = '80%';
    matDialogConfig.maxHeight= '80%';
    matDialogConfig.disableClose = false;
    // matDialogConfig.hasBackdrop = false;    //Adds the shadow tint on the background of the dialog box

    const matDialogRef = this.matDialog.open(PopupDialogComponent , matDialogConfig);
  }
  
}
