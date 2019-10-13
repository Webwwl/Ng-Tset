import { OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: '[debclick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  
  @Input() debounceTime = 500

  @Output() debounceClick: EventEmitter<any> = new EventEmitter()

  subject: Subject<any> = new Subject()

  click$: Subscription
  
  constructor() {}

  ngOnInit() {
    this.click$ = this.subject.pipe(
      debounceTime(this.debounceTime),
      map(e => e)
    ).subscribe(e => {
      this.debounceClick.emit(e);
    })
  }

  @HostListener('click', ['$event'])
  handleClick(e) {
    this.subject.next(e)
  }

  ngOnDestroy() {
    this.click$.unsubscribe()
  }
}
