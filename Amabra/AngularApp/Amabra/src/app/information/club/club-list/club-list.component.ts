import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ClubFilter } from '../club-filter';
import { ClubService } from '../club.service';
import { Club } from '../club';

@Component({
    selector: 'club',
    templateUrl: 'club-list.component.html'
})
export class ClubListComponent {

    filter = new ClubFilter();
    selectedClub: Club;

    get clubList(): Club[] {
        return this.clubService.clubList;
    }

    constructor(private clubService: ClubService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.clubService.load(this.filter);
    }

    select(selected: Club): void {
        this.selectedClub = selected;
    }

}
