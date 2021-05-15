import { BaseField } from './fields/BaseField';
import { FieldsControlService } from './fields-control.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  constructor(private fieldsControlService : FieldsControlService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.fieldsControlService.toFormGroup(this.formFields);
  }

  @Input() formFields: BaseField[] = [];
  form: FormGroup = new FormGroup({});
  payLoad = ' ';

  ngOnInit(): void {

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
