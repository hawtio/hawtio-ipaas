/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';

import { ConnectionViewPageComponent } from './view-page.component';
import { ConnectionViewWrapperComponent } from '../view-wrapper/view-wrapper.component';
import { ConnectionViewToolbarComponent } from '../view-toolbar/view-toolbar.component';
import { ConnectionViewComponent } from '../view/view.component';
import { StoreModule } from '../../store/store.module';

describe('ConnectionViewPage', () => {
  let component: ConnectionViewPageComponent;
  let fixture: ComponentFixture<ConnectionViewPageComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          StoreModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
        ],
        declarations: [
          ConnectionViewPageComponent,
          ConnectionViewWrapperComponent,
          ConnectionViewToolbarComponent,
          ConnectionViewComponent,
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
    fixture = TestBed.createComponent(ConnectionViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
