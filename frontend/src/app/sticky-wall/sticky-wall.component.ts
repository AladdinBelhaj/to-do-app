import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';
@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrls: ['./sticky-wall.component.css']
})
export class StickyWallComponent {
  cards: Card[] = [];

  
  constructor(private dialog: MatDialog,
    private cardService: CardService) {
      this.cards = this.cardService.getCards();
    }
    
  openModal() {
    this.dialog.open(ModalComponent, {
      width: '450px',
      height: '500px'
    });
  }

}
