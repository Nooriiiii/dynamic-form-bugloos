import { DropdownField, TextboxField, BaseField, EmailField } from './fields';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DynamicFormService{

  getForm() : BaseField[]{
    return [

      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxField({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new EmailField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ]
  }

}
