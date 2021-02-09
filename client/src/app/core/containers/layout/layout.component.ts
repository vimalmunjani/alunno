import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { IState } from '../../reducers';
import { SearchActions } from '../../actions';
import { selectUser } from 'src/app/auth/selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mobileQuery: MediaQueryList;
  toggleSearch: boolean = false;

  user$ = this._store.select(selectUser);

  ngOnInit(): void {
  }

  constructor(mediaMatcher: MediaMatcher,
    private _store: Store<IState>) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)');
  }

  openSearchBar() {
    this.toggleSearch = true;
  }

  closeSearchBar() {
    this.toggleSearch = false;
    this._store.dispatch(SearchActions.clearSearch());
  }

  onQueryChange(query: string) {
    this._store.dispatch(SearchActions.search({ query }));
  }

}
