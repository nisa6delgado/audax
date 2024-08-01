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
  selector: 'app-change-ownership',
  templateUrl: './change-ownership.page.html',
  styleUrls: ['./change-ownership.page.css'],
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
export class ChangeOwnershipPage implements OnInit {
  public invoices: any[];
  public rightMenuService = inject(RightMenuService);

  ngOnInit() {
    this.rightMenuService.set.emit(false);
    this.invoices = invoices;
  }
}
