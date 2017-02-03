import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FilterTextService } from '../../common/filter-text/filter-text.service';

@Component({
  selector: 'ipaas-connections-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss'],
})
export class ConnectionsListToolbarComponent implements OnInit {

  @Input() childConnections;
  @Input() loading: boolean;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  constructor(private filterService: FilterTextService) {}

  filterChanged(searchText: string) {
    //console.log('this.childConnections: ' + this.childConnections);
    //console.log('searchText: ' + JSON.stringify(searchText));
    this.filterService.filter(searchText, ['id', 'name'], this.childConnections);
    //console.log('From @Input filterChanged: filterConnections changed.');
    this.change.emit(this.filterService.filter(searchText, ['id', 'name'], this.childConnections));
  }

  ngOnInit() {
    //console.log('this.childConnections: ' + JSON.stringify(this.childConnections));
  }

}
