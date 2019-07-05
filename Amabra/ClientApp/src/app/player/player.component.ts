import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})
export class PlayerComponent {
  public players: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/Players').subscribe(result => {
      this.players = result;
    }, error => console.error(error));
  }
}
