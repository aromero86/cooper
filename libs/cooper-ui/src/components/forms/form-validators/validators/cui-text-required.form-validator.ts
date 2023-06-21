import { AbstractControl } from "@angular/forms";
import { CuiValidationErrors, CuiValidatorFn } from "../interfaces/cui-validator-fn.interface";

export function CuiTextRequieredFormValidator(errorMessage: string = 'Field is required'): CuiValidatorFn {
    return (control: AbstractControl): CuiValidationErrors | null => {
        if (!control)
            return null;
        if (String(control.value).trim() !== '')
            return null;
        return { textRequired: { value: control.value, errorMessage } }
    };
}
