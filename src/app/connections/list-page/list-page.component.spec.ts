/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { IPaaSCommonModule } from '../../common/common.module';
import { ConnectionsListComponent } from '../list/list.component';
import { ConnectionsListPageComponent } from './list-page.component';
import { ConnectionsListToolbarComponent } from '../list-toolbar/list-toolbar.component';

describe('ConnectionsListComponent', () => {
  let component: ConnectionsListPageComponent;
  let fixture: ComponentFixture<ConnectionsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IPaaSCommonModule, RouterTestingModule.withRoutes([])],
      declarations: [
        ConnectionsListComponent,
        ConnectionsListPageComponent,
        ConnectionsListToolbarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

