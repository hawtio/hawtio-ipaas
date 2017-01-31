import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

//import { ConnectionStore } from '../../store/connection/connection.store';
// import { Connections } from '../../store/connection/connection.model';

import { FilterTextService } from '../../common/filter-text/filter-text.service';

@Component({
  selector: 'ipaas-connections-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss'],
})
export class ConnectionsListToolbarComponent {
  //originalList: any[] = [];

  @Input() filteredConnections;

  constructor(private filterService: FilterTextService/*, private store: ConnectionStore*/) {
    // We need to subscribe? Even through Restangular for a second time?

    //this.filteredConnections = store.resource.subscribe(() => {
/*
    this.filteredConnections = this.store.list.subscribe(() => {
      console.log('Object retrieved OK!');
    }, () => {
      console.log('There was an error retrieving!');
    });*/

    //this.originalList = JSON.parse(store.resource);
  }

  filterChanged(searchText: string) {
    console.log('searchText: ' + JSON.stringify(searchText));

    // Service requires an array, not an Observable.
    //this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.store.list);
    //this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'],
    // this.filteredConnections);
    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.filteredConnections);

    // The above filter returns the correct list from the filter service, so passing.


    //this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'],
    // this.filteredConnections);

    /*
    if(this.filterService.filter(searchText, ['id', 'name'], this.filteredConnections) === true) {
      this.store.loadAll();
    }
    */

    //this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'],
    // this.store.list.next());
  }
}
