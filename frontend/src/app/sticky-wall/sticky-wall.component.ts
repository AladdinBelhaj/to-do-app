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
  colorIndex = 0;

  

  constructor(private dialog: MatDialog, private cardService: CardService) {
  }

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



  

  deleteCard(cardId: number | undefined) {
    if (cardId === undefined) {
      console.error('cardId is undefined');
      return;
    }

    this.cardService.deleteCard(cardId).subscribe(() => {
      this.cards = this.cards.filter(card => card.id !== cardId);
    });
  }
  getRandomColor(): string {
    const colors = ['#fdf2b3', '#d1eaed', '#ffdada', '#ffd4a9'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  private loadCards() {
    this.cardService.getAllCards().subscribe(cards => { 
      this.cards = cards
    });
    
  }


  private getColorForCard(): string {
    const colors = ['#fdf2b3', '#d1eaed', '#ffdada', '#ffd4a9']; // Specify your colors here
    const color = colors[this.colorIndex];
    this.colorIndex = (this.colorIndex + 1) % colors.length; // Increment and cycle the color index
    return color;
  }
  

   
  }
  

