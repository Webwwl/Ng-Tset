import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { FontColorDirective } from './directives/font-color.directive';
import { ModalService } from './services/modal/modal.service';

// entryComponent
import { ComfirmModalComponent } from './services/modal/confirm/comfirm.component';

const DIRECTIVES = [
  DebounceClickDirective,
  FontColorDirective
]

const COMPONENTS = [
  ComfirmModalComponent
]

const SERVICES = [
  ModalService
]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ... SERVICES
  ],
  exports: [
    ...DIRECTIVES
  ],
  entryComponents: [
    ComfirmModalComponent
  ]
})
export class ShareModule { }
