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
import { simulationLists } from 'src/app/core/mock/simulationList';

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.page.html',
  styleUrls: ['./simulation-list.page.css'],
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
export class SimulationListPage implements OnInit {
  public list: any[];

  constructor() {}

  ngOnInit() {
    this.list = simulationLists;
  }
}
