import 'cypress-xpath';

class MainPage {
    getElements() {
        return cy.xpath("//h5[contains(text(), 'Elements')]//ancestor::div[contains(@class, 'top-card')]");
    }

    getForms() {
        return cy.xpath("//h5[contains(text(), 'Forms')]//ancestor::div[contains(@class, 'top-card')]");
    }

    getAlertsFrameWindows() {
        return cy.xpath("//h5[contains(text(), 'Alerts, Frame & Windows')]//ancestor::div[contains(@class, 'top-card')]");
    }

    getWidgets() {
        return cy.xpath("//h5[contains(text(), 'Widgets')]//ancestor::div[contains(@class, 'top-card')]");
    }
    
    getInteractions() {
        return cy.xpath("//h5[contains(text(), 'Interactions')]//ancestor::div[contains(@class, 'top-card')]");
    }

    getBookStoreApplication() {
        return cy.xpath("//h5[contains(text(), 'Book Store Application')]//ancestor::div[contains(@class, 'top-card')]");
    }
}

export default MainPage