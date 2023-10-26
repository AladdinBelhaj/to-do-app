import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../services/card.service';
import { Card } from '../model/card';
import { ModalComponent } from '../sticky-wall/modal/modal.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  cards: Card[] = [];


  constructor(private dialog: MatDialog, private cardService: CardService) {}

  ngOnInit() {
    this.loadCardsWithTodayDate();
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Reload cards when the modal is closed (e.g., when a new card is added)
      if (result) {
        this.loadCardsWithTodayDate();
      }
    });
  }

  private loadCardsWithTodayDate() {
    const today = new Date();
    const todayFormatted = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    this.cardService.getAllCards().subscribe(cards => {
      console.log(cards);
      this.cards = cards.filter(card => card.date === todayFormatted);
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
