class CheckBoxPage {
    getExpandAll() {
        return cy.xpath("//button[contains(@class, 'rct-option-expand-all')]");
    }

    getCollapseAll() {
        return cy.xpath("//button[contains(@class, 'rct-option-expand-all')]");
    }

    getElementWithText(text) {
        //return cy.xpath("//span[text()='%s']//parent::label", text);
        return cy.get('span').contains(text);
    }
}

export default CheckBoxPage