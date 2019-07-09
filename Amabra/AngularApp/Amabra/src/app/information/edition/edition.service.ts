import { Edition } from './edition';
import { EditionFilter } from './edition-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class EditionService {
    
    constructor(private http: HttpClient) {
    }

    editionList: Edition[] = [];
  
    findById(id: string): Observable<Edition> {
      let url = '/api/Editions/' + id; 
        return this.http.get<Edition>(url);
    }
    
    load(filter: EditionFilter): void {
        this.find(filter).subscribe(
            result => {
                this.editionList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: EditionFilter): Observable<Edition[]> {
        let url = '/api/Editions';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "season": filter.season,
            "nation": filter.nation,
        };

        return this.http.get<Edition[]>(url, {params, headers});
    }

    save(entity: Edition): Observable<Edition> {
        let url = '/api/Editions';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Edition>(url, entity, {headers});
    }
}

