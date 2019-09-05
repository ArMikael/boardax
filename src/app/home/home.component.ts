import { Component, OnInit } from '@angular/core';
import { DataStoreService } from "../shared/services/data-store.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private store: DataStoreService) { }

  rating: number;


  ngOnInit() {
    this.store.getRating().subscribe(rating => {
      this.rating = rating;
    });
  }

}
