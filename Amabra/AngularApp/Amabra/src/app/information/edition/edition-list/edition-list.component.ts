import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EditionFilter } from '../edition-filter';
import { EditionService } from '../edition.service';
import { Edition } from '../edition';

@Component({
    selector: 'edition',
    templateUrl: 'edition-list.component.html'
})
export class EditionListComponent {

    filter = new EditionFilter();
    selectedEdition: Edition;

    get editionList(): Edition[] {
        return this.editionService.editionList;
    }

    constructor(private editionService: EditionService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.editionService.load(this.filter);
    }

    select(selected: Edition): void {
        this.selectedEdition = selected;
    }

}
