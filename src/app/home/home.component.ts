import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared';

@Component({
  selector: 'my-home',
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items: Array<Object>;

  constructor(private api: ApiService) {
    // Do stuff 
    api.getMenu()
    .subscribe(
      data => this.items = data.Items,
      error => console.log('Error HTTP GET Service'), // in case of failure show this message
      () => console.log('GET MENU Job Done!' + this.items[0])// run this code in all cases 
      );
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
