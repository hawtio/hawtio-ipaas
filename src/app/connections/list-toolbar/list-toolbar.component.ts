import { Component, Input } from '@angular/core';

import { FilterTextService } from '../../common/filter-text/filter-text.service';

@Component({
  selector: 'ipaas-connections-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss'],
})
export class ConnectionsListToolbarComponent  {
  //filteredConnections: any[] = [];

  truncateLimit = 80;

  truncateTrail = '…';

  @Input() filteredConnections;

  @Input() loading: boolean;

  constructor(private filterService: FilterTextService) { }

  get debug() {
    return JSON.stringify(this.filteredConnections);
  }

  filterChanged(searchText: string) {
    console.log('searchText: ' + JSON.stringify(searchText));
    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.filteredConnections);
  }

}
