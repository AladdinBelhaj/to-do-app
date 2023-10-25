// category.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySubject = new BehaviorSubject<string>('stickyNotes');
  currentCategory = this.categorySubject.asObservable();

  setCategory(category: string) {
    this.categorySubject.next(category);
  }
}
