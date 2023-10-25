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



  date: Date = new Date();
  title: string = "";
  description: string = "";

  minDate: Date;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private cardService: CardService,
  ) {this.minDate = new Date();}


  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }



   getRandomColor(): string {
    const colors = ['#fdf2b3', '#d1eaed', '#ffdada', '#ffd4a9'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  onSubmit() {
    // Create a new Card object with title and description
    const color = this.getRandomColor();
    const currDate = this.formatDate(this.date);

    const newCard = new Card(this.title, this.description, currDate, color);

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
