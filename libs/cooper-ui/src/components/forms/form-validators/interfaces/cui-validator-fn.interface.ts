import { AbstractControl, ValidatorFn } from "@angular/forms";

export type CuiValidationErrors = {
    [key: string]: { value: unknown, errorMessage: string };
};

export interface CuiValidatorFn extends ValidatorFn {
    (control: AbstractControl): CuiValidationErrors | null;
}
