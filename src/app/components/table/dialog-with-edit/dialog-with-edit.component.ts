import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-with-edit',
  templateUrl: './dialog-with-edit.component.html',
  styleUrls: ['./dialog-with-edit.component.scss']
})
export class DialogWithEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogWithEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
  }

  closeDialog() {
    
    this.dialogRef.close(true);
  }
  closeDialogWithNODelete() {
    
    this.dialogRef.close();
  }
 

}
