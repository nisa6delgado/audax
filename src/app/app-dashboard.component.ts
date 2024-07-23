import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
  IonRouterOutlet,
  IonRow,
  IonSearchbar,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'app-dashboard.component.html',
  styleUrls: ['app-dashboard.component.css'],
  standalone: true,
  imports: [
    IonChip,
    IonCardContent,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonButton,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonGrid,
    IonCol,
    IonRow,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppDashboardComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'fa-solid fa-gauge' },
    { title: 'Suministros', url: '/supplies', icon: 'fa-regular fa-clone' },
    { title: 'Facturas', url: '/invoices', icon: 'fa-solid fa-plug' },
    {
      title: 'Consultas',
      url: '/consultations',
      icon: 'fa-regular fa-envelope',
    },
    { title: 'Contratos', url: '/contracts', icon: 'fa-solid fa-briefcase' },
    {
      title: 'Notificaciones',
      url: '/notifications',
      icon: 'fa-regular fa-bell',
    },
    {
      title: 'Curvas de carga',
      url: '/load-curves',
      icon: 'fa-solid fa-chart-simple',
    },
    {
      title: 'Estrategia de cierre',
      url: '/dashboard/closing-strategy',
      icon: 'fa-solid fa-rocket',
    },
    {
      title: 'Simulación de cierre',
      url: '/dashboard/closing-simulation',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Fotovoltaica',
      url: '/photovoltaic',
      icon: 'fa-solid fa-solar-panel',
    },
    {
      title: 'Preguntas frecuentes',
      url: '/frequent-questions',
      icon: 'fa-regular fa-circle-question',
    },
  ];

  public changes = [
    {
      title: 'Cambio contraseña',
      url: '/change-password',
      icon: 'fa-solid fa-gear',
    },
    {
      title: 'Cambio de titular',
      url: 'change-ownership',
      icon: 'fa-solid fa-pencil',
    },
    {
      title: 'Cambio de cuenta bancaria',
      url: '/change-bank-account',
      icon: 'fa-solid fa-pen-to-square',
    },
    {
      title: 'Cambio de potencia',
      url: '/change-power',
      icon: 'fa-solid fa-bolt',
    },
  ];

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

  public user = {
    name: 'Javier de Gracia Losada',
    dni: '53289229T',
  };

  public showMenu: boolean = false;

  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
    });
  }

  collapse() {
    this.showMenu = !this.showMenu;
  }
}
