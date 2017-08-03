export interface BasicFilter {
  type: string;
  predicate: any;
  simple?: string;
  rules?: Rule[];
}

export interface AdvancedFilter {
  config?: string;
  simple?: string;
  type: string;
}

export interface Rule {
  path: string;
  op?: string;
  value: string;
}
