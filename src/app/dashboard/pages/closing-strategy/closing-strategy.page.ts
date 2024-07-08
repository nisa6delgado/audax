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
          data: [11, 10, 9, 10, 11, 11.5, 11, 9, 8.5, 8, 8.5, 10],
          backgroundColor: 'background: rgba(217, 217, 217, 1)',
          fill: 'background: rgba(217, 217, 217, 1)',
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
            align: 'center',
            position: 'bottom',
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
