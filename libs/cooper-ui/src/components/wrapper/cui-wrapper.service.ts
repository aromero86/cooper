import { Injectable,
         ViewContainerRef }    from '@angular/core';
// --------------------------------------------------------
import { CuiWrapperComponent } from './cui-wrapper.component';

@Injectable({ providedIn: 'root' })
export class CuiWrapperService {

    private wrapperComponent: CuiWrapperComponent | null = null;

    public get modalsContainer(): ViewContainerRef | undefined {
        return this.wrapperComponent?.modalsContainer;
    }

    bindWrapperComponent(wrapperComponent: CuiWrapperComponent) {
        if (this.wrapperComponent) {
            throw new Error('Wrapper component should only be instantiated once');
        }
        this.wrapperComponent = wrapperComponent;
    }

}
