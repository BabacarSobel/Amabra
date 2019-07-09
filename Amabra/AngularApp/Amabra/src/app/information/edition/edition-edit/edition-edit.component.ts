import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionService } from '../edition.service';
import { Edition } from '../edition';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'edition-edit',
  templateUrl: './edition-edit.component.html'
})
export class EditionEditComponent implements OnInit {

    id: string;
    edition: Edition;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private editionService: EditionService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Edition());
                    return this.editionService.findById(id)
                })
            )
            .subscribe(
                edition => { 
                    this.edition = edition; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.editionService.save(this.edition).subscribe(
            edition => { 
                this.edition = edition; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}