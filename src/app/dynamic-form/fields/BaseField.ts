export class BaseField {
  value: string | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  validator: string;
  description: string;
  // roleEdit=['admin', 'karshenas']
  // roleView=['admin', 'karshenas']
  options: {key: string, value: string}[];

  constructor(options: {
      value?: string;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      validator?: string;
      description?: string;
      options?: {key: string, value: string}[];
    } = {}) {

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validator = options.validator || "";
    this.type = options.type || '';
    this.description = options.description  || '';
    this.options = options.options || [];
  }
}
