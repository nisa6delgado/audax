import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';
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
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-closing-strategy',
  templateUrl: './closing-strategy.page.html',
  styleUrls: ['./closing-strategy.page.css'],
  standalone: true,
  imports: [
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
          }
        }
      },
    });
  }
}
