import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TournementFilter } from '../tournement-filter';
import { TournementService } from '../tournement.service';
import { Tournement } from '../tournement';

@Component({
    selector: 'tournement',
    templateUrl: 'tournement-list.component.html'
})
export class TournementListComponent {

    filter = new TournementFilter();
    selectedTournement: Tournement;

    get tournementList(): Tournement[] {
        return this.tournementService.tournementList;
    }

    constructor(private tournementService: TournementService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.tournementService.load(this.filter);
    }

    select(selected: Tournement): void {
        this.selectedTournement = selected;
    }

}
