import { AbstractControl } from "@angular/forms";
import { CuiValidationErrors, CuiValidatorFn } from "../interfaces/cui-validator-fn.interface";

export function CuiTextMinLengthFormValidator(minLength: number, errorMessage?: string): CuiValidatorFn {
    return (control: AbstractControl): CuiValidationErrors | null => {
        if (!control)
            return null;
        const value = String(control.value).trim();
        if (value.length < minLength) {
            const defaultErrorMessage = `Value is too short. Almost ${ minLength } characters are required`;
            return { textMinLength: { value: control.value, errorMessage: errorMessage?? defaultErrorMessage } }
        } else {
            return null;
        }
    };
}
