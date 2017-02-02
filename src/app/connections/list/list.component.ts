import { Component, Input, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

//import { ConnectionStore } from '../../store/connection/connection.store';
import { Connections } from '../../store/connection/connection.model';

@Component({
  selector: 'ipaas-connections-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ConnectionsListComponent implements OnInit {

  truncateLimit = 80;
  truncateTrail = '…';

  @Input() connections: Connections;
  //connections: Observable<Connections>;

  // filteredConnections: any[] = [];
  //@Input() filteredConnections: Connections;


  @Input() loading: boolean;
  //loading: Observable<boolean>;

  //constructor() { }
  // constructor(private filterService: FilterTextService) { }
  constructor(/*private store: ConnectionStore*/) {
    //this.loading = store.loading;
    //this.connections = store.list;
    //this.connections = store.resource;
  }

  ngOnInit() {
    //this.store.loadAll();
  }

  /*
  filterChanged(searchText: string) {
    this.filteredConnections = this.filterService.filter(searchText, ['id', 'name'], this.connections);
  }
  */
}
