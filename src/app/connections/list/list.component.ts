import { Component, /*Input,*/ OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Connections } from '../../store/connection/connection.model';
import { ConnectionStore } from '../../store/connection/connection.store';

@Component({
  selector: 'ipaas-connections-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ConnectionsListComponent implements OnInit {

  truncateLimit = 80;
  truncateTrail = '…';

  public connections: Observable<Connections>;
  public loading: Observable<boolean>;

  constructor(private store: ConnectionStore) {
    //this.loading = store.loading;
    this.connections = store.list;
  }

  updateConnections(event) {
    console.log('Event from updateConnections: ' + JSON.stringify(event));
    this.connections = event;
  }

  ngOnInit() {
    this.store.loadAll();
  }

}
