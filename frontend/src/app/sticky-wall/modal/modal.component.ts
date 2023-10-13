import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private cardService: CardService
  ) {}

  title:string = "";
  description:string = "";
  

  onSubmit() {
    const newCard = new Card(this.title, this.description);
    this.cardService.addCard(newCard);
    this.dialogRef.close(newCard); // Pass the new card back to the caller
}
  }

