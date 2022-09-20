class RadioButtonsPage {
    getYesRadioButton()  {
        return cy.xpath("//label[@for='yesRadio']")
    }

    getImpressiveRadioButton()  {
        return cy.xpath("//label[@for='impressiveRadio']")
    }

    getNoRadioButton()  {
        return cy.xpath("//label[@for='noRadio']")
    }

    getRadioMessage()  {
        return cy.xpath("//div[contains(@class, 'custom-radio')]//following-sibling::p")
    }
}


export default RadioButtonsPage

// @FindBy(xpath = "//label[@for='yesRadio']")
//     private WebElement yesRadioButton;

//     @FindBy(xpath = "//label[@for='impressiveRadio']")
//     private WebElement impressiveRadioButton;

//     @FindBy(xpath = "//label[@for='noRadio']")
//     private WebElement noRadioButton;

//     @FindBy(xpath = "//div[contains(@class, 'custom-radio')]//following-sibling::p")
//     private WebElement radioMessage;