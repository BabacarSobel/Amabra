import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SeasonFilter } from '../season-filter';
import { SeasonService } from '../season.service';
import { Season } from '../season';

@Component({
    selector: 'season',
    templateUrl: 'season-list.component.html'
})
export class SeasonListComponent {

    filter = new SeasonFilter();
    selectedSeason: Season;

    get seasonList(): Season[] {
        return this.seasonService.seasonList;
    }

    constructor(private seasonService: SeasonService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.seasonService.load(this.filter);
    }

    select(selected: Season): void {
        this.selectedSeason = selected;
    }

}
