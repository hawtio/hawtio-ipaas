import { SyndesisComponent } from '../../common/common';
import { element, by, ElementFinder } from 'protractor';
import { CallbackStepDefinition } from 'cucumber';
import { P } from '../../common/world';
import { ConnectionsListComponent } from '../../connections/list/list.po';
import { log } from '../../../src/app/logging';


export class FlowConnection {

  constructor(public type: string, public element: ElementFinder) {
  }

  /**
   * Check if this element is active
   * @returns {webdriver.promise.Promise<boolean>}
   */
  isActive(): P<boolean> {
    return this.element.element(by.css('p.icon.active')).isPresent();
  }

}

export class FlowViewComponent implements SyndesisComponent {
  static readonly nameSelector = 'input.form-control.integration-name';

  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-flow-view'));
  }

  getIntegrationName(): P<string> {
    return this.rootElement()
      .element(by.css(FlowViewComponent.nameSelector))
      .getAttribute('value');
  }

  /**
   * Get div
   * @param type (start|finish)
   */
  async flowConnection(type: string): P<FlowConnection> {
    type = type.toLowerCase();
    const e = await this.rootElement().element(by.css(`div.row.steps.${type}`));
    return new FlowConnection(type, e);
  }
}

export class ListActionsComponent implements SyndesisComponent {
  rootElement(): ElementFinder {
    return element(by.css('syndesis-list-actions'));
  }

  selectAction(name: string): P<any> {
    log.info(`searching for integration action '${name}'`);
    return this.rootElement().element(by.cssContainingText('div.name', name)).click();
  }

}

export class ConnectionSelectComponent implements SyndesisComponent {
  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-connection-select'));
  }

  connectionListComponent(): ConnectionsListComponent {
    return new ConnectionsListComponent();
  }


}


export class IntegrationBasicsComponent implements SyndesisComponent {
  static readonly nameSelector = 'input[name="nameInput"]';
  static readonly descriptionSelector = 'textarea[name="descriptionInput"]';

  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-integration-basics'));
  }

  setName(name: string): P<any> {
    log.debug(`setting integration name to ${name}`);
    return this.rootElement().$(IntegrationBasicsComponent.nameSelector).sendKeys(name);
  }

  setDescription(description: string): P<any> {
    return this.rootElement().$(IntegrationBasicsComponent.descriptionSelector).sendKeys(description);
  }


}

export class IntegrationEditPage implements SyndesisComponent {

  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-edit-page'));
  }

  flowViewComponent(): FlowViewComponent {
    return new FlowViewComponent();
  }

  connectionSelectComponent(): ConnectionSelectComponent {
    return new ConnectionSelectComponent();
  }

  basicsComponent(): IntegrationBasicsComponent {
    return new IntegrationBasicsComponent();
  }


}

export class IntegrationAddStepPage implements SyndesisComponent {
  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-step-select'));
  }

  addStep(stepName: string): P<any> {
    log.info(`searching for step ${stepName}`);
    return this.rootElement().element(by.cssContainingText('div.list-group-item-heading', stepName)).getWebElement().click();
  }
}

export class IntegrationConfigureStepPage implements SyndesisComponent {
  rootElement(): ElementFinder {
    return element(by.css('syndesis-integrations-step-configure'));
  }
}

export class IntegrationConfigureLogStepPage extends IntegrationConfigureStepPage {
  static readonly messageSelector = 'input[name="message"]';

  logMessage: string;

  constructor(logMessage: string) {
    super();
    this.logMessage = logMessage;
  }

  fillConfiguration(): void {
    this.setMessage(this.logMessage);
  }

  setMessage(message: string): P<any> {
    log.debug(`setting integration step message to ${message}`);
    return this.rootElement().$(IntegrationConfigureLogStepPage.messageSelector).sendKeys(message);
  }

  getMessageInput(): ElementFinder {
    log.info(`searching for message input`);
    return this.rootElement().$(IntegrationConfigureLogStepPage.messageSelector);
  }
}

export class IntegrationConfigureFilterStepPage extends IntegrationConfigureStepPage {
  static readonly filterSelector = 'textarea[name="filter"]';

  filterCondition: string;

  constructor(filterCondition: string) {
    super();
    this.filterCondition = filterCondition;
  }

  fillConfiguration(): void {
    this.setFilter(this.filterCondition);
  }

  setFilter(filterCondition: string): P<any> {
    log.debug(`setting integration filter step condition to ${filterCondition}`);
    return this.rootElement().$(IntegrationConfigureFilterStepPage.filterSelector).sendKeys(filterCondition);
  }

  getFilterDefinitioTextArea(): ElementFinder {
    log.info(`searching filter definition text area`);
    return this.rootElement().$(IntegrationConfigureFilterStepPage.filterSelector);
  }
}


