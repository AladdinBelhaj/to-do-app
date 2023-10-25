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

  title: string = "";
  description: string = "";

  onSubmit() {
    // Create a new Card object with title and description
    const newCard = new Card(this.title, this.description);

    // Send the new card to the server for saving
    this.cardService.addCard(newCard).subscribe(
      (response) => {
        // Handle the success response from the server if needed
        console.log("Note saved successfully", response);

        // Close the modal and pass the new card back to the caller
        this.dialogRef.close(newCard);
      },
      (error) => {
        // Handle any error that occurs during the HTTP request
        console.error("Error saving note:", error);
      }
    );
  }
}
