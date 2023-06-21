import { ChangeDetectionStrategy,
         Component, 
         Input, 
         OnDestroy, 
         forwardRef}            from '@angular/core';
import { ControlValueAccessor,
         NG_VALUE_ACCESSOR }    from '@angular/forms';
import { BehaviorSubject }      from 'rxjs';
// --------------------------------------------------------
import { CuiFormControl }       from '../form-validators';
import { CuiFormControlBase }   from '../form-control-base/cui-form-control-base';

@Component({
    selector: 'cui-form-text',
    templateUrl: './cui-form-text.component.html',
    styleUrls: ['./cui-form-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CuiFormTextComponent),
        multi: true,
    }],
})
export class CuiFormTextComponent extends CuiFormControlBase implements ControlValueAccessor, OnDestroy {

    private _value = new BehaviorSubject('');
    public value$ = this._value.asObservable();

    @Input() set formControl(formControl: CuiFormControl) {
        if (!formControl)
            return;
        super.createSubscriptions(formControl, this.value$);
    };

    ngOnDestroy(): void {
        super.destroy();
    }

    public set value(newValue: string) {
        this._value.next(newValue);
        this._onChange(this.value);
        this._onTouched();
        console.log('User');
    }

    public get value() : string {
        return this._value.getValue();
    }

    writeValue(value: string | null): void {
        value = value ?? '';
        this._value.next(value);
        console.log('System');
    }

}
