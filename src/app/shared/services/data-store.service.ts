import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _rating = new BehaviorSubject(5);

  getRating() {
    return this._rating.asObservable();
  }

  setRating(rating) {
    this._rating.next(rating)
  }
}
