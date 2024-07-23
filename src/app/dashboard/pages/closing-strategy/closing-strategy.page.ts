import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
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
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonDatetime,
    IonInput,
    IonCheckbox,
    IonToggle,
    IonButton,
    IonLabel,
    IonCardContent,
    IonChip,
    IonModal,
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
  public futures: Chart;
  public closingSimulation: Chart;

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';

  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) closingSimulationModal: IonModal;

  name: string;

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

    this.chart = new Chart('colsingStrategy', {
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
          },
        },
      },
    });
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  generateFutureChart() {
    const data = {
      labels: [
        '04/2023',
        '06/2023',
        '08/2023',
        '10/2023',
        '12/2023',
        '02/2024',
      ],
      datasets: [
        {
          label: '2021',
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          backgroundColor: 'rgba(238, 175, 48, 1)',
          borderColor: 'rgba(238, 175, 48, 1)',
        },
        {
          label: '2022',
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          backgroundColor: 'rgba(106, 89, 57, 1)',
          borderColor: 'rgba(106, 89, 57, 1)',
        },
        {
          label: '2023',
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          backgroundColor: 'rgba(152, 75, 140, 1)',
          borderColor: 'rgba(152, 75, 140, 1)',
        },
        {
          label: '2023',
          data: [
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
            this.random(),
          ],
          backgroundColor: 'rgba(150, 150, 150, 1)',
          borderColor: 'rgba(150, 150, 150, 1)',
        },
      ],
    };

    if (this.futures) {
      this.futures.destroy();
    }

    this.futures = new Chart('futuresCSt', {
      type: 'line',
      data,
      options: {
        plugins: {
          legend: {
            display: false,
            align: 'end',
            position: 'top',
          },
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 220,
          },
        },
      },
    });
  }

  random() {
    return Math.floor(Math.random() * 221);
  }

  closingSimulationGraph() {
    const data = {
      labels: [
        '25 Mar',
        '1 Abr',
        '8 Abr',
        '15 Abr',
        '22 Abr',
      ],
      datasets: [
        {
          label: '2021',
          data: [60, 57, 63, 66, 68],
          backgroundColor: 'rgba(238, 175, 48, 1)',
          borderColor: 'rgba(238, 175, 48, 1)',
        }
      ],
    };

    this.closingSimulation = new Chart('closingSimulationGraph', {
      type: 'line',
      data,
      options: {
        plugins: {
          legend: {
            display: false,
            align: 'end',
            position: 'top',
          },
        },
        scales: {
          y: {
            suggestedMin: 55,
            suggestedMax: 70,
          },
        },
      },
    });
  }
}
