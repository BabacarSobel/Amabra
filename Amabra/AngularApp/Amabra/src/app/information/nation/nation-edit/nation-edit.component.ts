import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NationService } from '../nation.service';
import { Nation } from '../nation';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'nation-edit',
  templateUrl: './nation-edit.component.html'
})
export class NationEditComponent implements OnInit {

    id: string;
    nation: Nation;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private nationService: NationService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Nation());
                    return this.nationService.findById(id)
                })
            )
            .subscribe(
                nation => { 
                    this.nation = nation; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.nationService.save(this.nation).subscribe(
            nation => { 
                this.nation = nation; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}