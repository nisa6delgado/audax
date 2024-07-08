import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.css'],
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class RecoveryPasswordPage implements OnInit {
  showPasswordOld: boolean = false;
  showPasswordNew: boolean = false;
  showPasswordConfirm: boolean = false;

  constructor() {}

  ngOnInit() {}

  togglePasswordOldVisibility(): void {
    this.showPasswordOld = !this.showPasswordOld;
  }

  togglePasswordNewVisibility(): void {
    this.showPasswordNew = !this.showPasswordNew;
  }

  togglePasswordConfirmVisibility(): void {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }
}
