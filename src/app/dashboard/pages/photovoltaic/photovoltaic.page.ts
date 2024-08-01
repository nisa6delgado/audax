import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RightMenuService } from 'src/app/core/right-menu.service';
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
  IonRange,
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
  selector: 'app-photovoltaic',
  templateUrl: './photovoltaic.page.html',
  styleUrls: ['./photovoltaic.page.css'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonLabel,
    IonButton,
    IonCardContent,
    IonChip,
    IonIcon,
    IonRange,
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
export class PhotovoltaicPage implements OnInit {
  ngOnInit() {
  }
}
