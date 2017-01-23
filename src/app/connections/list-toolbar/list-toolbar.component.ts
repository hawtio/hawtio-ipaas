import { Component, Input } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

//import { ConnectionStore } from '../../store/connection/connection.store';
//import { Connections } from '../../store/connection/connection.model';

import { FilterTextService } from '../../common/filter-text/filter-text.service';

@Component({
  selector: 'ipaas-connections-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss'],
})
export class ConnectionsListToolbarComponent {
  //filteredConnections: any[] = [];

  @Input() filteredConnections;

  constructor(private filterService: FilterTextService/*, private store: ConnectionStore*/) {
    // We need to subscribe, but maybe from the parent component?
    /*
    this.filteredConnections = store.list.subscribe(() => {
      console.log('Object retrieved OK!');
    }, () => {
      console.log('There was an error retrieving!');
    });
    */
  }

  filterChanged(searchText: string) {
    console.log('searchText: ' + JSON.stringify(searchText));

    // Service requires an array, not an Observable. Need to susbscribe.
    //this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.store.list);

    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.filteredConnections);
  }
}
