import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import 'codemirror/mode/go/go';
import { CurrentFlow, FlowEvent } from '../../current-flow.service';
import { IntegrationSupportService } from '../../../../store/integration-support.service';

import { log, getCategory } from '../../../../logging';
import { AdvancedFilter } from './filter.interface';

@Component({
  selector: 'syndesis-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class AdvancedFilterComponent implements OnInit {
  formGroup: FormGroup;
  config: {};
  content: string;

  @Input() step;
  @Input() position;
  @Input()
  advancedFilterObject = {
    'type': 'simple',
  };
  @Output() advancedFilterObjectChange = new EventEmitter<AdvancedFilter>();

  constructor(public currentFlow: CurrentFlow,
              public integrationSupport: IntegrationSupportService) {
    this.config = { lineNumbers: true, mode: 'text/x-go' };
    this.content = `// ... some code !
    package main
    import "fmt"
    // Send the sequence 2, 3, 4, ... to channel 'ch'.
    func generate(ch chan<- int) {
      for i := 2; ; i++ {
        ch <- i  // Send 'i' to channel 'ch'
      }
    }`;
  }

  ngOnInit() {
    const prevStep = this.currentFlow.getPreviousConnection(this.position);

    this.integrationSupport.getFilterOptions(this.currentFlow.getIntegrationClone()).toPromise().then((resp: any) => {
      log.infoc(() => 'Filter option response: ' + JSON.stringify(resp));
    });

    //this.formGroup = this.formService.createFormGroup(this.advancedFilterModel);
  }

  onChange($event) {
    const formGroupObj = this.formGroup.value;

    const formattedProperties: AdvancedFilter = {
      type: 'simple',
    };

    this.advancedFilterObjectChange.emit(formattedProperties);
  }
}
