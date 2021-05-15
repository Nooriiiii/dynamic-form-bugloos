import { BaseField, DropdownField, TextboxField } from './dynamic-form/fields';
import { Component } from '@angular/core';
import { DynamicFormService } from './dynamic-form/dynamic-form.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  formFields: BaseField[];

  constructor(private dynamicFormService: DynamicFormService){
    this.formFields = dynamicFormService.getForm();
  }

}
