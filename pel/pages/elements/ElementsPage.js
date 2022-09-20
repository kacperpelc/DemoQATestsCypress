import 'cypress-xpath';

class ElementsPage {
    getCheckBoxPage() {
        return cy.xpath("//span[contains(text(), 'Check Box')]//parent::li")
    }
    
    getRadioButtons() {
        return cy.xpath("//span[contains(text(), 'Radio Button')]//parent::li");
    }
}

export default ElementsPage

//     @FindBy(xpath = "//span[contains(text(), 'Text Box')]//parent::li")
//     private WebElement textBox;

//     @FindBy(xpath = "//span[contains(text(), 'Check Box')]//parent::li")
//     private WebElement checkBox;

//     @FindBy(xpath = "//span[contains(text(), 'Radio Button')]//parent::li")
//     private WebElement radioButton;

//     @FindBy(xpath = "//span[contains(text(), 'Web Tables')]//parent::li")
//     private WebElement webTables;

//     @FindBy(xpath = "//span[contains(text(), 'Buttons')]//parent::li")
//     private WebElement buttons;

//     @FindBy(xpath = "//span[contains(text(), 'Links')]//parent::li")
//     private WebElement links;

//     @FindBy(xpath = "//span[contains(text(), 'Broken Links - Images')]//parent::li")
//     private WebElement brokenLinksImages;

//     @FindBy(xpath = "//span[contains(text(), 'Upload and Download')]//parent::li")
//     private WebElement uploadAndDownload;

//     @FindBy(xpath = "//span[contains(text(), 'Dynamic Properties')]//parent::li")
//     private WebElement dynamicProperties;