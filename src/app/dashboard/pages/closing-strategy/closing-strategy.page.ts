import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
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
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-closing-strategy',
  templateUrl: './closing-strategy.page.html',
  styleUrls: ['./closing-strategy.page.css'],
  standalone: true,
  imports: [
    IonItem,
    IonButtons,
    IonModal,
    IonCheckbox,
    IonToggle,
    IonButton,
    IonLabel,
    IonCardContent,
    IonChip,
    IonIcon,
    IonSearchbar,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCardHeader,
    IonCard,
    IonCol,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ClosingStrategyPage implements OnInit {
  public chart: Chart;
  @ViewChild(IonModal) modal: IonModal;

  public dataKAM = [
    {
      id: 1,
      day: 'Dia 12 de abril',
      time: 'a las 11.00h',
    },
    {
      id: 2,
      day: 'Dia 12 de abril',
      time: 'a las 13.30h',
    },
    {
      id: 3,
      day: 'Dia 12 de abril',
      time: 'a las 17.00h',
    },
    {
      id: 4,
      day: 'Dia 13 de abril',
      time: 'a las 09.00h',
    },
    {
      id: 4,
      day: 'Dia 14 de abril',
      time: 'a las 10.00h',
    },
  ];

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  ngOnInit() {
    const data = {
      labels: [
        'ENE',
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SEP',
        'OCT',
        'NOV',
        'DIC',
      ],
      datasets: [
        {
          label: '2021',
          data: [0, 0, 0, 0, 0, 5, 5, 4, 4, 3, 3, 0],
          backgroundColor: 'rgba(202, 222, 160, 1)',
          borderColor: 'rgba(202, 222, 160, 1)',
          fill: true,
        },
        {
          label: '2022',
          data: [0, 0, 0, 0, 0, 6, 6, 5, 5, 4, 4, 0],
          backgroundColor: 'rgba(206, 206, 206, 1)',
          borderColor: 'rgba(206, 206, 206, 1)',
          fill: true,
        },
        {
          label: '2023',
          data: [0, 0, 0, 0, 0, 7, 7, 6, 6, 5, 5, 0],
          backgroundColor: 'rgba(255, 203, 142, 1)',
          borderColor: 'rgba(255, 203, 142, 1)',
          fill: true,
        },
      ],
    };

    this.chart = new Chart('chart', {
      type: 'line',
      data,
      options: {
        plugins: {
          legend: {
            display: true,
            align: 'end',
            position: 'top',
          },
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 12,
          },
        },
      },
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
