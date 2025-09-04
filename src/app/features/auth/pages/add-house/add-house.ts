import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  nom: string = '';
  email: string = '';

  constructor(private dialogRef: MatDialogRef<PopupComponent>) {}

  close() {
    this.dialogRef.close();
  }

  submit() {
    console.log('Nom:', this.nom, 'Email:', this.email);
    this.dialogRef.close({ nom: this.nom, email: this.email });
  }
}
