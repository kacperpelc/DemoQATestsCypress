import MainPage from '../../../../pel/pages/MainPage';
import ElementsPage from '../../../../pel/pages/elements/ElementsPage';
import CheckBoxPage from '../../../../pel/pages/elements/checkBoxPage/CheckBoxPage';

describe('empty spec', () => {
  it('passes', () => {
    const mainPage = new MainPage();
    const elementsPage = new ElementsPage();
    const checkBoxPage = new CheckBoxPage();

    cy.visit('https://demoqa.com')
    mainPage.getElements().click()
    elementsPage.getCheckBoxPage().click()
    checkBoxPage.getExpandAll().click()
    checkBoxPage.getElementWithText('Home').click()
    checkBoxPage.getElementWithText('Office').click()
  })
})