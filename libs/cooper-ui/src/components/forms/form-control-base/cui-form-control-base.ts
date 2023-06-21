import { BehaviorSubject,
         Observable,
         Subscription,
         combineLatest,
         map }            from "rxjs";
// --------------------------------------------------------
import { CuiFormControl } from "../form-validators";

export class CuiFormControlBase {

    private _status = new BehaviorSubject<'VALID' | 'INVALID' | 'PENDING' | 'DISABLED'>('PENDING');

    public showValidationMessages$!: Observable<boolean>;
    public status$ = this._status.asObservable();
    public validationErrorMessages$!: Observable<string[]>;

    private subscriptions: Subscription[] = [];
    destroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    createSubscriptions(formControl: CuiFormControl, value$: Observable<unknown>) {

        // Status
        this._status.next(formControl.status);
        this.subscriptions.push(formControl.statusChanges.subscribe(status => {
            this._status.next(status);
        }));

        // Observables
        this.showValidationMessages$ = combineLatest([ this.status$, formControl.touched$ ])
            .pipe(map(([ status, touched ]) => {
                return status === 'INVALID' && touched;
            }));
        this.validationErrorMessages$ = combineLatest([ formControl.touched$, value$, this.status$ ]).pipe(map(() => {
            const validationErrors = formControl.errors || { };
            const validationErrorNames = Object.keys(validationErrors);
            return validationErrorNames.map(validationErrorName => validationErrors[validationErrorName].errorMessage);
        }));
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _onChange: (value: string | null) => void = (_value: string | null) => undefined;
    registerOnChange(fn: (value: string | null) => unknown): void {
        this._onChange = fn;
    }

    protected _onTouched: () => unknown = () => undefined;
    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    markAsTouched(): void {
        this._onTouched();
    }

}
