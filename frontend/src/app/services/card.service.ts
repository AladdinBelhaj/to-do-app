import { Injectable } from '@angular/core';
import { Card } from '../model/card'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addCard(card: Card) {
    return this.http.post('http://localhost:3000/note', card);
  }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>('http://localhost:3000/note');
  }

  deleteCard(noteId: number): Observable<any> {
    const url = `${this.apiUrl}/note/${noteId}`;
    return this.http.delete(url);
  }
}

