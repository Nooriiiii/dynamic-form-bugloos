import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseField } from './fields/BaseField';

@Injectable({providedIn: 'root'})
export class FieldsControlService{
  toFormGroup(inputs: BaseField[]): FormGroup {
    const group: any = {};

    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.type) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                              : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }
}
