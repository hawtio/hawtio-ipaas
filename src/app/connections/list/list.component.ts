import { Component, Input } from '@angular/core';

import { Connections } from '../../store/connection/connection.model';

@Component({
  selector: 'ipaas-connections-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ConnectionsListComponent {
  // filteredConnections: any[] = [];

  truncateLimit = 80;

  truncateTrail = '…';

  @Input() connections: Connections;
  @Input() filteredConnections: Connections;

  @Input() loading: boolean;

  constructor() { }
  // constructor(private filterService: FilterTextService) { }

  /*
  filterChanged(searchText: string) {
    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.connections);
  }
  */
}
