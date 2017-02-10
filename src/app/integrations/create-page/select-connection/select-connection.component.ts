import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { log, getCategory } from '../../../logging';
import { ConnectionStore } from '../../../store/connection/connection.store';
import { Connections, Connection } from '../../../store/connection/connection.model';

const category = getCategory("Integrations");

@Component({
  moduleId: module.id,
  selector: 'ipaas-integrations-select-connection',
  templateUrl: 'select-connection.component.html'
})
export class IntegrationsSelectConnectionComponent implements OnInit {

  connections: Observable<Connections>;
  loading: Observable<boolean>;

  constructor(private store: ConnectionStore) {
    this.loading = store.loading;
    this.connections = store.list;
  }

  onSelected(connection:Connection) {
    log.debugc(() => "Selected connection: " + connection.name, category);
  }

  ngOnInit() {
    this.store.loadAll();
  }
}