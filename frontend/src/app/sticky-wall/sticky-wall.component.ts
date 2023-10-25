import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrls: ['./sticky-wall.component.css']
})
export class StickyWallComponent implements OnInit {
  cards: Card[] = [];

  constructor(private dialog: MatDialog, private cardService: CardService) {}

  ngOnInit() {
    this.loadCards();
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Reload cards when the modal is closed (e.g., when a new card is added)
      if (result) {
        this.loadCards();
      }
    });
  }

  private loadCards() {
    this.cardService.getAllCards().subscribe(cards => {
      this.cards = cards;
    });
  }

  deleteCard(cardId: number | undefined) {
    if (cardId === undefined) {
      console.error('cardId is undefined');
      return;
    }

    this.cardService.deleteCard(cardId).subscribe(() => {
      this.cards = this.cards.filter(card => card.id !== cardId);
    });
  }
}
