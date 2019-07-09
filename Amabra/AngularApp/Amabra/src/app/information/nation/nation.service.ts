import { Nation } from './nation';
import { NationFilter } from './nation-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class NationService {
    
    constructor(private http: HttpClient) {
    }

    nationList: Nation[] = [];
  
    findById(id: string): Observable<Nation> {
        let url = '/api/Nations/'+id; 
        return this.http.get<Nation>(url);
    }
    
    load(filter: NationFilter): void {
        this.find(filter).subscribe(
            result => {
                this.nationList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: NationFilter): Observable<Nation[]> {
        let url = '/api/Nations';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Nation[]>(url, {params, headers});
    }

    save(entity: Nation): Observable<Nation> {
        let url = '/api/Nations';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Nation>(url, entity, {headers});
    }
}

