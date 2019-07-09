import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'player-edit',
  templateUrl: './player-edit.component.html'
})
export class PlayerEditComponent implements OnInit {

    id: string;
    player: Player;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Player());
                    return this.playerService.findById(id)
                })
            )
            .subscribe(
                player => { 
                    this.player = player; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.playerService.save(this.player).subscribe(
            player => { 
                this.player = player; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}