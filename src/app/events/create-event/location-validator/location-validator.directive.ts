import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return locationValidator(control);
  }
}

export const locationValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const address = control.get('location.address');
    const city = control.get('location.city');
    const country = control.get('location.country');
    const urlName = control.get('location.onlineUrl');

    if ((address && address.value && city && city.value &&
      country && country.value) || (urlName && urlName.value)) {
        return null;
      }
    else {
      return { validateLocation: true };
    }
  };

