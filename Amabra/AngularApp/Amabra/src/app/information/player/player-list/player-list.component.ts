import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PlayerFilter } from '../player-filter';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'player',
    templateUrl: 'player-list.component.html'
})
export class PlayerListComponent {

    filter = new PlayerFilter();
    selectedPlayer: Player;

    get playerList(): Player[] {
        return this.playerService.playerList;
    }

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.playerService.load(this.filter);
    }

    select(selected: Player): void {
        this.selectedPlayer = selected;
    }

}
