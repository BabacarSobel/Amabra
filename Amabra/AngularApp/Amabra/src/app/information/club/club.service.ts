import { Club } from './club';
import { ClubFilter } from './club-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ClubService {
    
    constructor(private http: HttpClient) {
    }

    clubList: Club[] = [];
  
    findById(id: string): Observable<Club> {
        let url = '/api/Clubs/'+id; 
        //let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Club>(url);
    }
    
    load(filter: ClubFilter): void {
        this.find(filter).subscribe(
            result => {
                this.clubList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: ClubFilter): Observable<Club[]> {
        let url = '/api/Clubs';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
            "nation": filter.nation,
        };

        return this.http.get<Club[]>(url, {params, headers});
    }

    save(entity: Club): Observable<Club> {
        let url = '/api/Clubs';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Club>(url, entity, {headers});
    }
}

