import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ModalService } from "../share/services/modal/modal.service";
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentChecked {

  modal$: Subject<any>

  constructor(public modal: ModalService) { }

  ngAfterContentChecked() {
    this.modal$ = this.modal.open() as Subject<any>;
    this.modal$.subscribe(res => {
      if (res) {
        console.log('ok')
      } else {
        console.log('no')
      }
    })
  }

  handleClick(e) {
    console.log('click')
  }

}
