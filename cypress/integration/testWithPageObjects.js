const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage");
const { navigateTo } = require("../support/page_objects/navigationPage");
const { onDatepickersPage} = require("../support/page_objects/datepickerPage");
const { onSmartTablePage } = require("../support/page_objects/smartTablePage");

describe("Test with Page Objects", () => {
  beforeEach("Open application", () => {
    cy.openHomePage()
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datePickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it(" should submit Inline and Basic form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Nizaam', 'nizaams@gmail.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('nizaams@gmail.com', 'Password')
    navigateTo.datePickerPage()
    onDatepickersPage.selectCommonDatepickerDateFromToday(1)
    onDatepickersPage.selectDatepickerWithRangeFromToday(7, 14)
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRecordWithFirstAndLastName('Nizaam', 'Saban')
    onSmartTablePage.updateAgeByFirstName('Nizaam', '40')
    onSmartTablePage.deleteRowByIndex(1)
  });
});
