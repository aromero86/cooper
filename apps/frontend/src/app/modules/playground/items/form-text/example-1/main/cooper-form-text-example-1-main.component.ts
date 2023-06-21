import { CommonModule }            from '@angular/common';
import { ChangeDetectionStrategy,
         Component }               from '@angular/core';
import { FormGroup,
         FormsModule,
         ReactiveFormsModule }     from '@angular/forms';
// --------------------------------------------------------
import { CuiButtonModule, CuiFormControl, CuiFormTextModule, CuiFormValidators }        from '@cooper/ui';

@Component({
    selector: 'cooper-form-text-example-1-main',
    templateUrl: './cooper-form-text-example-1-main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CuiButtonModule,
        CuiFormTextModule,
    ]
})
export class CooperFormTextExample1MainComponent {

    public formGroup = new FormGroup({
        firstName: new CuiFormControl('', [
            CuiFormValidators.CuiTextRequieredFormValidator('First Name is required said Luciana'),
            CuiFormValidators.CuiTextMinLengthFormValidator(5, 'First Name should have almost 5 characters'),
        ]),
        lastName: new CuiFormControl('', [ CuiFormValidators.CuiTextRequieredFormValidator('Last Name is required') ]),
    });

    showFormValues(): void {
        if (!this.formGroup.valid) {
            this.formGroup.markAllAsTouched();
        } else {
            const firstName = this.formGroup.controls.firstName.value;
            const lastName = this.formGroup.controls.lastName.value;
            window.alert(`Fullname: ${ firstName } ${ lastName }`);
        }
    }

    clear(): void {
        this.formGroup.setValue({ firstName: '', lastName: '' });
    }

    cambio(event: any): void {
        console.log({change: event})
    }

}
