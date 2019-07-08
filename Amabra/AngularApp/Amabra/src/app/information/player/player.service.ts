import { Injectable, PipeTransform, Inject} from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Player } from './player';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './sortable.directive';

interface SearchResult {
  players: Player[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(players: Player[], column: string, direction: string): Player[] {
  if (direction === '') {
    return players;
  } else {
    return [...players].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(player: Player, term: string, pipe: PipeTransform) {
  return player.name.toLowerCase().includes(term)
    || pipe.transform(player.nation).includes(term)
    || pipe.transform(player.club).includes(term);
}

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _players$ = new BehaviorSubject<Player[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private PLAYERS: Player[];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this._requestPlayers();
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(1000),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._players$.next(result.players);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  

  get players$() { return this._players$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _requestPlayers() :void {
    this.http.get<Player[]>(this.baseUrl + "api/Players").subscribe(result => {
      this.PLAYERS = result;
    }, error => console.error(error));
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    
    // 1. sort
    let players = sort(this.PLAYERS, sortColumn, sortDirection);
    // 2. filter
    players = players.filter(country => matches(country, searchTerm, this.pipe));
    const total = players.length;

    // 3. paginate
    players = players.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ players, total });
  }
}
