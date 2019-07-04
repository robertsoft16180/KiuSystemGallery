import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ModalComponent } from './modal.component';
import { Observable } from 'rxjs';

@Injectable()
export class ModalService {

  private options: MatDialogConfig;

  private dialogRef: MatDialogRef<ModalComponent>;

  public data: any;

  constructor(private dialog: MatDialog) { }

  public showModal(photo: any, role = 'dialog'): Observable<any> {

    this.setModalOptions(photo, role);
    this.openDialog(ModalComponent);

    return this.returnResult();
  }

  private setModalOptions(photo: any, role: any): void {
    this.options = {
      data: photo,
      role
    };
  }

  private openDialog(modalComponent: any): void {
    this.dialogRef = this.dialog.open(modalComponent, this.options);
  }

  private returnResult(): Observable<any> {
    return this.dialogRef.afterClosed();
  }

}
