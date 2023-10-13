import { Injectable } from '@angular/core';
import { Card } from '../model/card'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Card[] = [];

  addCard(card: Card) {
    this.cards.push(card);
  }

  getCards() {
    return this.cards;
  }
}

