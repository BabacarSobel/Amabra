import { Tournement } from './tournement';
import { TournementFilter } from './tournement-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TournementService {
    
    constructor(private http: HttpClient) {
    }

    tournementList: Tournement[] = [];
  
    findById(id: string): Observable<Tournement> {
        let url = '/api/Tournements/' + id;
        return this.http.get<Tournement>(url);
    }
    
    load(filter: TournementFilter): void {
        this.find(filter).subscribe(
            result => {
                this.tournementList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: TournementFilter): Observable<Tournement[]> {
        let url = '/api/Tournements';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
            "nation": filter.nation,
        };

        return this.http.get<Tournement[]>(url, {params, headers});
    }

    save(entity: Tournement): Observable<Tournement> {
        let url = '/api/Tournements';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Tournement>(url, entity, {headers});
    }
}

