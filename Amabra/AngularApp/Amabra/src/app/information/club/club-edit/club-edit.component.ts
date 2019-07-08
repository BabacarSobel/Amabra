import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../club.service';
import { Club } from '../club';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'club-edit',
  templateUrl: './club-edit.component.html'
})
export class ClubEditComponent implements OnInit {

    id: string;
    club: Club;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private clubService: ClubService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Club());
                    return this.clubService.findById(id)
                })
            )
            .subscribe(
                club => { 
                    this.club = club; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.clubService.save(this.club).subscribe(
            club => { 
                this.club = club; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}