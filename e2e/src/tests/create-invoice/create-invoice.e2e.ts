import { AccountRecivivableObject } from '@pages/objects/account-receivable/account-receivable';
import { QuoteDetailsObject } from '@pages/objects/quotes-details/quotes-details';

describe('Test create the invoice from quotes', () => {
  const quoteDetailsObject = new QuoteDetailsObject();
  const accountRecivivableObject = new AccountRecivivableObject();

  beforeAll(async () => {
    // already covered the login process
    await quoteDetailsObject.open();
  });

  beforeEach(async () => {
    await quoteDetailsObject.createNewInvoice();
  });
  
  it('Create Draft Invoice and save it', async () => {
    await accountRecivivableObject.saveInvoiceAsDraft();
    expect(await accountRecivivableObject.returnTheMessage()).toContain('Draft Invoice Saved');
  });

});
