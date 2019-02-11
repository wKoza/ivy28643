import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('matTable', {read: ElementRef}) elRef;

  items$ = new BehaviorSubject([]);
  displayedColumns = ['title'];


  ngAfterViewInit(): void {
    console.log(this.elRef.nativeElement);
  }

  ngOnInit(): void {
    this.items$.next([{title: 'title1'}, {title: 'title2'}]);
  }

}
