import { Component, Input } from '@angular/core';
import { Connections } from '../../store/connection/connection.model';

@Component({
  selector: 'ipaas-connections-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ConnectionsListPageComponent {

  @Input() connectionList;
  @Input() loading: boolean;

  truncateLimit = 80;
  truncateTrail = '…';

  constructor() {}

}
