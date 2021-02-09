import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return LocationValidator(control);
  }
}

export const LocationValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const address = control.get('address');
    const city = control.get('city');
    const country = control.get('country');
    const urlName = control.get('onlineUrl');

    if ((address && address.value && city && city.value &&
      country && country.value) || (urlName && urlName.value)) {
        return null;
      }
    else {
      return { validateLocation: false };
    }
  }

