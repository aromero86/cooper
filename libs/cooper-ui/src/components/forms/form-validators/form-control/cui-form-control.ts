import { FormControl }     from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// --------------------------------------------------------
import { CuiValidatorFn }  from '../interfaces/cui-validator-fn.interface';

export class CuiFormControl extends FormControl {

    private _touched = new BehaviorSubject<boolean>(false);
    public touched$ = this._touched.asObservable();
  
    constructor(
        formState: unknown,
        validator: CuiValidatorFn | CuiValidatorFn[] = [],
    ) {
        super(formState, validator);
    }
  
    override markAsTouched({ onlySelf }: { onlySelf?: boolean } = {}): void {
        super.markAsTouched({ onlySelf });
        if (this._touched.value === false) {
            this._touched.next(true);
        }
    }

}
