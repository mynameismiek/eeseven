import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SimpleConfirmationDialogData } from './simple-confirmation-dialog-data';

@Component({
  selector: 'app-simple-confirmation-dialog',
  templateUrl: './simple-confirmation-dialog.component.html',
  styleUrls: ['./simple-confirmation-dialog.component.css']
})
export class SimpleConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SimpleConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SimpleConfirmationDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}