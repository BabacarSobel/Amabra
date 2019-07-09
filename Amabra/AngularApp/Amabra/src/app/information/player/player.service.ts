import { Player } from './player';
import { PlayerFilter } from './player-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class PlayerService {
    
    constructor(private http: HttpClient) {
    }

    playerList: Player[] = [];
  
    findById(id: string): Observable<Player> {
        let url = '/api/Players'; 
        let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Player>(url, {params, headers});
    }
    
    load(filter: PlayerFilter): void {
        this.find(filter).subscribe(
            result => {
                this.playerList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: PlayerFilter): Observable<Player[]> {
        let url = '/api/Players';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
            "nationalTeam": filter.nationalTeam,
            "club": filter.club,
            "nation": filter.nation,
        };

        return this.http.get<Player[]>(url, {params, headers});
    }

    save(entity: Player): Observable<Player> {
        let url = '/api/Players';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Player>(url, entity, {headers});
    }
}

