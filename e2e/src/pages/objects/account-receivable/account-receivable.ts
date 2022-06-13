import { AccountReceivableElements } from '@pages/elements/account-receivable/account-receivable'
import { BaseObject } from '@pages/objects/base';
import { Generators } from '@services/generators/data-generators';

export class AccountRecivivableObject extends BaseObject {

  accountReceivableElements = new AccountReceivableElements();
  dataGenerators = new Generators();

  // Page Logic
  /**
   * save the invoice as draft
   * 
   * @param dueDate the task title
   */
  public async saveInvoiceAsDraft(dueDate: string = ''): Promise<void> {
    await browser.waitUntil(async () => (await (this.accountReceivableElements.saveBtn)).isDisplayed());
    const dueDateValue = dueDate ? dueDate : this.dataGenerators.randomDueDate();
    await this.fillDueDate(dueDateValue);

    await this.clickSaveInvoiceAsDraftButton();
    console.log('========= save the invoice as draft ==========');
  }

  /**
   * return the page save as draft msg
   * 
   * @returns if the tests passed as true, otherwise it will failed with element missing issue inside the default logs
   */
  public async returnTheMessage(): Promise<string> {
    return (await this.accountReceivableElements.successMessage).getText();
  }

  // Page Actions
  /**
   * fill the due date
   * 
   * @param dueDate the invoice due date
   */
  private async fillDueDate(dueDate: string): Promise<void> {
    await (await this.accountReceivableElements.invoiceDueDate).setValue(dueDate);
  }

  /**
   * click the save button
   * 
   */
  private async clickSaveInvoiceAsDraftButton(): Promise<void> {
    await (await this.accountReceivableElements.saveBtn).click();
  }

}
