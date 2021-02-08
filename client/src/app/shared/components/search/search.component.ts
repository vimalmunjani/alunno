import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  @Output() queryChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() debounceTime: number = 100;

  ngAfterViewInit(): void {
    fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        console.log('query', query)
        this.queryChange.emit(query);
      })
  }

}
