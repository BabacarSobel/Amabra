import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from '../season.service';
import { Season } from '../season';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'season-edit',
  templateUrl: './season-edit.component.html'
})
export class SeasonEditComponent implements OnInit {

    id: string;
    season: Season;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private seasonService: SeasonService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Season());
                    return this.seasonService.findById(id)
                })
            )
            .subscribe(
                season => { 
                    this.season = season; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.seasonService.save(this.season).subscribe(
            season => { 
                this.season = season; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}