/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';

import { IPaaSCommonModule } from '../../common/common.module';
import { ConnectionsListPageComponent } from '../list-page/list-page.component';
import { ConnectionsListComponent } from './list.component';
import { ConnectionsListToolbarComponent } from '../list-toolbar/list-toolbar.component';
import { StoreModule } from '../../store/store.module';

describe('ConnectionListComponent', () => {
  let component: ConnectionsListComponent;
  let fixture: ComponentFixture<ConnectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IPaaSCommonModule, StoreModule, RouterTestingModule.withRoutes([]), RestangularModule.forRoot()],
      declarations: [
        ConnectionsListComponent,
        ConnectionsListPageComponent,
        ConnectionsListToolbarComponent
      ],
      providers: [
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        }, deps: [MockBackend, RequestOptions],
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

