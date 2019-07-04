import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Photo } from '../../../interfaces/photo';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alert-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  photo: Photo;

  constructor( public dialogRef: MatDialogRef<ModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Photo) {
    this.photo = data;
  }
}
