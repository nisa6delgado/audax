import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
  standalone: true,
  imports: [
    IonSegmentButton,
    IonSegment,
    IonChip,
    IonSearchbar,
    IonLabel,
    IonButton,
    IonIcon,
    IonItem,
    IonList,
    IonInput,
    IonCol,
    IonRow,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonGrid,
  ],
})
export class DashboardPage implements OnInit {
  public chart: Chart;

  public news = [
    {
      title:
        'Audax Renovables cierra, a través del BEI, la financiación para la construcción de 141MWp fotovoltaicos en España',
      date: '7 de diciembre de 2023',
      image: '/assets/img/propeller.png',
    },
    {
      title:
        'Audax Renovables lanza un programa de recompra de bonos de hasta 50 millones',
      date: '16 de noviembre de 2023',
      image: '/assets/img/panel.png',
    },
    {
      title:
        'Audax duplica su EBITDA a septiembre de 2023, superando los 77 millones de euros',
      date: '13 de noviembre de 2023',
      image: '/assets/img/panel-2.png',
    },
  ];
  ngOnInit() {
    const data = {
      labels: [
        'Dic',
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
      ],
      datasets: [
        {
          label: '2021',
          data: [160, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: 'rgba(251, 215, 215, 1)',
        },
        {
          label: '2022',
          data: [330, 330, 200, 200, 180, 250, 208, 270, 330, 200, 200, 200],
          backgroundColor: 'rgba(208, 223, 238, 1)',
        },
        {
          label: '2023',
          data: [0, 320, 170, 170, 150, 180, 330, 340, 330, 160, 160, 160],
          backgroundColor: 'rgba(243, 202, 120, 1)',
        },
      ],
    };

    this.chart = new Chart('chart', {
      type: 'bar',
      data,
      options: {
        plugins: {
          legend: {
            display: true,
            align: 'center',
            position: 'bottom',
          },
        },
      },
    });
  }
}
