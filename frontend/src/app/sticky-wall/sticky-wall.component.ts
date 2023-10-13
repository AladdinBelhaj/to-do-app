import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrls: ['./sticky-wall.component.css']
})
export class StickyWallComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }
}
