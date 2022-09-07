import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-for-deleted-all',
  templateUrl: './dialog-for-deleted-all.component.html',
  styleUrls: ['./dialog-for-deleted-all.component.scss']
})
export class DialogForDeletedAllComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogForDeletedAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
    console.log('Dialog got', this.data);
  }

  closeDialog() {
    
    this.dialogRef.close(true);
    this.data=[]

  }
  closeDialogWithNODelete() {
    this.data=[]
    this.dialogRef.close();
  }
 

}
