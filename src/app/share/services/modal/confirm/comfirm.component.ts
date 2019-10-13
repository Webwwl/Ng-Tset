import { OnInit, Component, Input, Output, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { Subject, Subscription, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './comfirm.component.html',
    styleUrls: ['./comfirm.component.less']
})
export class ComfirmModalComponent {

    // @ViewChild('container') eleRef: ElementRef

    res$: Subject<any> = new Subject()

    public isShow: boolean = false;

    constructor() {}

    handleClick(type: number) {
        if (type) {
            this.res$.next(true)
        } else {
            this.res$.next(false)
        }
    }
}