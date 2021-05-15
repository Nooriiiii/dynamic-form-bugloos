import { FormGroup } from '@angular/forms';
import { BaseField } from '../fields/BaseField';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input()
  input!: BaseField;
  @Input() form!: FormGroup;

  payLoad = ' ';

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.input.key].valid; }

}
