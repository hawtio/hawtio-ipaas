import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IPaaSCommonModule } from '../common/common.module';
import { ConnectionsListPageComponent } from './list-page/list-page.component';
import { ConnectionsListToolbarComponent } from './list-toolbar/list-toolbar.component';
import { ConnectionsListComponent } from './list/list.component';
import { ConnectionViewPageComponent } from './view-page/view-page.component';
import { ConnectionViewWrapperComponent } from './view-wrapper/view-wrapper.component';
import { ConnectionViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { ConnectionViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ConnectionsListComponent, pathMatch: 'full' },
  { path: ':id', component: ConnectionViewPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IPaaSCommonModule,
  ],
  declarations: [
    ConnectionsListPageComponent,
    ConnectionsListToolbarComponent,
    ConnectionsListComponent,
    ConnectionViewPageComponent,
    ConnectionViewWrapperComponent,
    ConnectionViewToolbarComponent,
    ConnectionViewComponent,
  ],
})
export class ConnectionsModule {
}
