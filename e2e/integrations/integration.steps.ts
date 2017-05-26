/**
 * Created by jludvice on 8.3.17.
 */
import { binding, then, when } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';
import { expect, P, World } from '../common/world';
import { IntegrationEditPage, ListActionsComponent } from '../integrations/edit/edit.po';
import { IntegrationConfigureFilterStepPage, IntegrationConfigureLogStepPage } from '../integrations/edit/edit.po';
import { IntegrationConfigureStepPage, IntegrationAddStepPage } from '../integrations/edit/edit.po';
import { log } from '../../src/app/logging';
import { IntegrationsListPage, IntegrationsListComponent } from '../integrations/list/list.po';

/**
 * Created by jludvice on 1.3.17.
 */
@binding([World])
class IntegrationSteps {

  constructor(protected world: World) {
  }

  @when(/defines integration name "([^"]*)"$/)
  public defineIntegrationName(integrationName: string): P<any> {
    const page = new IntegrationEditPage();
    return page.basicsComponent().setName(integrationName);
  }


  @then(/^she is presented with a visual integration editor$/)
  public editorOpened(): P<any> {
    // Write code here that turns the phrase above into concrete actions
    const page = new IntegrationEditPage();
    return expect(page.rootElement().isPresent(), 'there must be edit page root element')
      .to.eventually.be.true;
  }

  @then(/^she is presented with a visual integration editor for "([^"]*)"$/)
  public editorOpenedFor(integrationName: string): P<any> {
    return this.editorOpened().then(() => {
      // ensure we're on editor page and then check integration name
      const page = new IntegrationEditPage();
      return expect(page.flowViewComponent().getIntegrationName(), `editor must display integration name ${integrationName}`)
        .to.eventually.be.equal(integrationName);
    }).catch(e => P.reject(e));
  }

  @when(/^Camilla selects the "([^"]*)" integration.*$/)
  public selectConnection(itegrationName: string): P<any> {
    const page = new IntegrationsListPage();
    return page.listComponent().goToIntegration(itegrationName);
  }

  @when(/^she selects "([^"]*)" integration action$/)
  public selectIntegrationAction(action: string, callback): void {
    const page = new ListActionsComponent();
    page.selectAction(action).then(() => callback());
  }

  @when(/^Camilla deletes the "([^"]*)" integration*$/)
  public deleteIntegration(integrationName: string): P<any> {
    const listComponent = new IntegrationsListComponent();
    return this.world.app.clickDeleteIntegration(integrationName, listComponent.rootElement());
  }

  @then(/^Integration "([^"]*)" is present in integrations list$/)
  public expectIntegrationPresent(name: string, callback: CallbackStepDefinition): void {
    log.info(`Verifying integration ${name} is present`);
    const page = new IntegrationsListPage();
    expect(page.listComponent().isIntegrationPresent(name), `Integration ${name} must be present`)
      .to.eventually.be.true.notify(callback);
  }

  @then(/^Camilla can not see "([^"]*)" integration anymore$/)
  public expectIntegrationNotPresent(name: string, callback: CallbackStepDefinition): void {
    log.info(`Verifying if integration ${name} is present`);
    const page = new IntegrationsListPage();
    expect(page.listComponent().isIntegrationPresent(name), `Integration ${name} must be present`)
      .to.eventually.be.false.notify(callback);
  }

  @then(/^she is presented with a add step page$/)
  public addStepPageOpened(callback: CallbackStepDefinition): void {
    const page = new IntegrationAddStepPage();
    expect(page.rootElement().isPresent(), 'there must be add step page root element')
      .to.eventually.be.true.notify(callback);
  }

  @then(/^she is presented with a step configure page$/)
  public configureStepPageOpen(callback: CallbackStepDefinition): void {
    const page = new IntegrationConfigureStepPage();
    expect(page.rootElement().isPresent(), 'there must be add step page root element')
      .to.eventually.be.true.notify(callback);
  }

  @then(/^she selects "([^"]*)" step$/)
  public addStep (stepName: string): P<any> {
    log.info(`Adding ${stepName} step to integration`);
    const page = new IntegrationAddStepPage();
    return page.addStep(stepName);
  }

  @then(/fill configure page for log step with "([^"]*)" message$/)
  public fillLogStepConfigure (message: string, callback: CallbackStepDefinition): void {
    const page = new IntegrationConfigureLogStepPage(message);
    expect(page.getMessageInput().isPresent(), 'there must input for log message')
      .to.eventually.be.true.notify(callback);
    page.fillConfiguration();
  }

  @then(/fill configure page for filter step with "([^"]*)" condition$/)
  public fillFilterStepConfigure (condition: string, callback: CallbackStepDefinition): void {
    const page = new IntegrationConfigureFilterStepPage(condition);
    expect(page.getFilterDefinitioTextArea().isPresent(), 'there must text area for filter definition')
      .to.eventually.be.true.notify(callback);
    page.fillConfiguration();
  }
}


export = IntegrationSteps;

