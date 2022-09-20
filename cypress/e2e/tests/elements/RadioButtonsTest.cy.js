import MainPage from '../../../../pel/pages/MainPage';
import ElementsPage from '../../../../pel/pages/elements/ElementsPage';
import RadioButtonsPage from '../../../../pel/pages/elements/radioButtonsPage/RadioButtonsPage';

describe('empty spec', () => {
  it('passes', () => {
    const mainPage = new MainPage();
    const elementsPage = new ElementsPage();
    const radioButtonsPage = new RadioButtonsPage();

    cy.visit('https://demoqa.com')
    mainPage.getElements().click()
    elementsPage.getRadioButtons().click()
    radioButtonsPage.getYesRadioButton().click()
    radioButtonsPage.getRadioMessage().should('have.text', 'You have selected Yes')
    radioButtonsPage.getImpressiveRadioButton().click()
    radioButtonsPage.getRadioMessage().should('have.text', 'You have selected Impressive')
    radioButtonsPage.getNoRadioButton().should('not.be.enabled')
  })
})