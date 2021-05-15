import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../dynamic-form/dynamic-form.service';
import { BaseField, DateField, NumberField, EmailField } from '../dynamic-form/fields';

@Component({
  selector: 'app-desginer',
  templateUrl: './desginer.component.html',
  styleUrls: ['./desginer.component.css']
})
export class DesginerComponent implements OnInit {

  formFields: BaseField[];

  form = new FormGroup({
    key: new FormControl('', [Validators.required, Validators.minLength(3)]),
    label: new FormControl('', [Validators.required]),
    required: new FormControl(false),
    controlType: new FormControl(null,  [Validators.required]),
    description: new FormControl(),
    order: new FormControl(),
    validator: new FormControl(),
    options: new FormControl(),

  });

  formMode: 'edit' | 'new' = 'new';
  editField?: BaseField;
  editDropdownOptions : {key: string, value: string, tag?: boolean}[] =  [];

  constructor(private dynamicFormService: DynamicFormService){
    this.formFields = dynamicFormService.getForm();
  }

  new(){
    this.form.reset();
    this.formMode = 'new';
  }
  submit(){
    const val = this.form.value;
    console.log(val)

    let field = new BaseField(val)
    if(val.controlType === 'date'){
      field = new DateField(val)
    }
    if(val.controlType === 'number'){
      field = new NumberField(val)
    }
    if(val.controlType === 'email'){
      field = new EmailField(val)
    }

    field.options = val.options?.map((o: string) => ({key: o, value: o}));
    field.options = field.options || [];

    if(this.formMode === 'new'){
      this.formFields = [...this.formFields, field]
    }else{
      this.formFields = this.formFields.map(f => {
        if(f.key !== this.editField?.key){
          return f;
        }
        else{
          return field;
        }
      })
    }
    this.form.reset();
  }

  ngOnInit(): void {
  }

  edit(field: BaseField){
    this.formMode= 'edit';
    this.form.patchValue(field);
    this.editField = field;
    this.editDropdownOptions = [];
    if(field.options){
      this.editDropdownOptions = field.options.map(o => ({tag: true, key: o.key, value: o.value}));
      this.form.patchValue({options: this.editDropdownOptions.map(x => x.key)});
    }
  }

  delete(field: BaseField){
    if(confirm('⚠are you sure?⚠')){
      this.formFields = this.formFields.filter(f =>f.key != field.key)
    }
  }

  addTagFn(name: string) {
    return { key: name, value: name,  tag: true };
  }

}
