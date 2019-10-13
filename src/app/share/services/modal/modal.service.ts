import { Injectable, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { ComfirmModalComponent } from './confirm/comfirm.component';
import { Subject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  instanceRef: ComponentRef<any>

  sub$: Subject<any>

  constructor(public cfr: ComponentFactoryResolver, public appRef: ApplicationRef, public injector: Injector) {}

  open() {
    const factory = this.cfr.resolveComponentFactory(ComfirmModalComponent);
    const componentRef = factory.create(this.injector)
    this.instanceRef = componentRef;
    componentRef.instance.isShow = true;
    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild( (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0])
    this.sub$ = componentRef.instance.res$;
    return this.sub$.pipe(switchMap(res => {
      this.close();
      return of(res)
    }))
  }

  close() {
    this.instanceRef.instance.isShow = false;
  }

}
