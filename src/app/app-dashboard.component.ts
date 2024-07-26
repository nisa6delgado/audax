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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonModal,
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
  closeCircleOutline,
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
    IonInput,
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
    IonModal,
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
    {
      title: 'Suministros',
      url: '/dashboard/supplies',
      icon: 'fa-regular fa-clone',
    },
    { title: 'Facturas', url: '/dashboard/invoices', icon: 'fa-solid fa-plug' },
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
      url: 'change-password',
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

  public passwordRules = {
    length: false,
    lower: false,
    upper: false,
    number: false,
    special: false,
  };

  public showMenu: boolean = false;
  public changePasswordModal: boolean = false;
  public disableChangePasswordButton: boolean = true;

  public newPassword: string = '';
  public oldPassword: string = '';
  public confirmPasswordValue: string = '';

  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      closeCircleOutline,
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

  setOpen(modal: string) {
    if (modal == 'change-password') {
      this.changePasswordModal = true;
    }
  }

  validateNewPassword(event: any) {
    const value = event.target.value;
    this.newPassword = value;

    const upper = /([A-Z])/;
    const lower = /([a-z])/;
    const number = /([0-9])/;
    const special = /([$@$.!%*?&])/;

    this.passwordRules.length = false;
    this.passwordRules.upper = false;
    this.passwordRules.lower = false;
    this.passwordRules.number = false;
    this.passwordRules.special = false;

    if (value.length >= 8) {
      this.passwordRules.length = true;
    }

    if (upper.test(value)) {
      this.passwordRules.upper = true;
    }

    if (lower.test(value)) {
      this.passwordRules.lower = true;
    }

    if (number.test(value)) {
      this.passwordRules.number = true;
    }

    if (special.test(value)) {
      this.passwordRules.special = true;
    }

    this.activateChangePassword();
  }

  validateOldPassword(event: any) {
    this.oldPassword = event.target.value;
    this.activateChangePassword();
  }

  confirmPassword(event: any) {
    this.confirmPasswordValue = event.target.value;
    this.activateChangePassword();
  }

  activateChangePassword() {
    if (this.passwordRules.upper == false) {
      return;
    }

    if (this.passwordRules.lower == false) {
      return;
    }

    if (this.passwordRules.number == false) {
      return;
    }

    if (this.passwordRules.special == false) {
      return;
    }

    if (this.passwordRules.length == false) {
      return;
    }

    if (this.oldPassword.length == 0) {
      return;
    }

    if (this.newPassword != this.confirmPasswordValue.toString()) {
      return;
    }

    this.disableChangePasswordButton = false;
  }
}
