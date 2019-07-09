import { Season } from './season';
import { SeasonFilter } from './season-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class SeasonService {
    
    constructor(private http: HttpClient) {
    }

    seasonList: Season[] = [];
  
    findById(id: string): Observable<Season> {
      let url = '/api/Seasons/' + id; 
        return this.http.get<Season>(url);
    }
    
    load(filter: SeasonFilter): void {
        this.find(filter).subscribe(
            result => {
                this.seasonList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: SeasonFilter): Observable<Season[]> {
        let url = '/api/Seasons';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "Year": filter.Year,
        };

        return this.http.get<Season[]>(url, {params, headers});
    }

    save(entity: Season): Observable<Season> {
        let url = '/api/Seasons';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Season>(url, entity, {headers});
    }
}

