import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared';
import { FilterPipe } from '../shared/filter-pipe';

@Component({
  selector: 'my-home',
  pipes: [FilterPipe],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items: Array<Object>;
  category = '';

  constructor(private api: ApiService) {
    // Do stuff 
    api.getMenu()
    .subscribe(
      data => this.items = data.Items,
      error => console.log('Error HTTP GET Service') // in case of failure show this message
      // () => console.log('GET MENU Job Done!' + this.items[0])// run this code in all cases 
      );
  }

  categorize(val: string) {
    this.category = val.toLowerCase();
  }

  ngOnInit() {
    // console.log('Hello Home');
  }

}
