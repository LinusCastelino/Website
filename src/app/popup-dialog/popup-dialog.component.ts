import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<PopupDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  ngOnInit() {
  }

  public closeDialog(){
    this.matDialogRef.close("Mat-Dialog Closed!");
  }

}
