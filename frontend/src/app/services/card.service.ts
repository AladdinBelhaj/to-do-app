import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'http://localhost:3000/note'; // Combined base URL

  constructor(private http: HttpClient) {}

  addCard(card: Card): Observable<any> {
    return this.http.post(this.apiUrl, card);
  }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  deleteCard(noteId: number): Observable<any> {
    const url = `${this.apiUrl}/${noteId}`; // Dynamically add noteId to the URL
    return this.http.delete(url);
  }
}
