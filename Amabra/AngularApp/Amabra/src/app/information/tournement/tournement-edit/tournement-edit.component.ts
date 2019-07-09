import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournementService } from '../tournement.service';
import { Tournement } from '../tournement';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'tournement-edit',
  templateUrl: './tournement-edit.component.html'
})
export class TournementEditComponent implements OnInit {

    id: string;
    tournement: Tournement;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private tournementService: TournementService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Tournement());
                    return this.tournementService.findById(id)
                })
            )
            .subscribe(
                tournement => { 
                    this.tournement = tournement; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.tournementService.save(this.tournement).subscribe(
            tournement => { 
                this.tournement = tournement; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}