import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NationFilter } from '../nation-filter';
import { NationService } from '../nation.service';
import { Nation } from '../nation';

@Component({
    selector: 'nation',
    templateUrl: 'nation-list.component.html'
})
export class NationListComponent {

    filter = new NationFilter();
    selectedNation: Nation;

    get nationList(): Nation[] {
        return this.nationService.nationList;
    }

    constructor(private nationService: NationService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.nationService.load(this.filter);
    }

    select(selected: Nation): void {
        this.selectedNation = selected;
    }

}
