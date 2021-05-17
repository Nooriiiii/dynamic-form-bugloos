import { DropdownField, TextboxField, BaseField, EmailField, NumberField } from './fields';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DynamicFormService{

  getForm() : BaseField[]{
    return [

      new TextboxField({
        key: 'name',
        label: 'First Name',
        required:true,
        order: 1
      }),

      new NumberField({
        key: 'age',
        label: 'Age',
        value: '30',
        type:'number',
        order: 2
      }),

      new EmailField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),

      new DropdownField({
        key: 'role',
        label: 'Role',
        options: [
          {key: 'admin',  value: 'Admin'},
          {key: 'owner',  value: 'Owner'},
          {key: 'user',   value: 'User'}
        ],
        order: 4
      }),
    ]
  }

}
