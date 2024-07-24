import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { invoices } from 'src/app/core/mock/invoices';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.css'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonLabel,
    IonButton,
    IonCardContent,
    IonChip,
    IonIcon,
    IonCard,
    IonSearchbar,
    IonGrid,
    IonCol,
    IonRow,
    IonCardTitle,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class InvoicesPage implements OnInit {
  public invoices: any[];

  constructor() {}

  ngOnInit() {
    this.invoices = invoices;
  }
}