import { Component, Input } from '@angular/core';

import { Connections } from '../../store/connection/connection.model';
//import { FilterTextService } from '../../common/filter-text/filter-text.service';

@Component({
  selector: 'ipaas-connections-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ConnectionsListComponent implements OnInit {
  //filteredConnections: any[] = [];

  truncateLimit = 80;

  truncateTrail = '…';

  @Input() connections: Connections;

  @Input() loading: boolean;

  constructor() { }
  //constructor(private filterService: FilterTextService) { }

  /*
  filterChanged(searchText: string) {
    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.connections);
  }
  */

  ngOnInit() {
    //console.log('this.filteredConnections before: ' + JSON.stringify(this.filteredConnections));
    console.log('this.connections: ' + JSON.stringify(this.connections));
    //this.filteredConnections = this.connections;
    //console.log('this.filteredConnections after: ' + JSON.stringify(this.filteredConnections));
  }
}
