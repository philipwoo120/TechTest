import { BaseObject } from '@pages/objects/base';
import { DefaultPageUrls } from '@const/page-url-lists';
import { QuoteDetailsElements } from '@pages/elements/quote-details/quote-details-elements';
import { roles } from '@config/roles';

export class QuoteDetailsObject extends BaseObject {

  quoteDetailsElements = new QuoteDetailsElements();
  // this guid could come from the API to make the data dynamic
  defaultViewId = '04cffb26-4911-4da9-b2ca-9663cf60ae61';

  /**
   * Open Url for the quote view details
   * 
   * @param loginRole login roles as define in config/roles
   */
  public async open(viewGuid: string = '', loginRole: any = roles.ADMIN.ADMIN): Promise<void> {
    if (!(await this.confirmLoginedWithNavbar(false))) {
      await this.logIn(loginRole);
    }
    // this force wait could be removed if the performance of the portal with good behaviors    
    await this.timer(2.5);
    await browser.waitUntil(async () => (await browser.getUrl()) != null);

    const url = await browser.getUrl();
    const guid = viewGuid ? viewGuid : this.defaultViewId;
    if (!url.includes(DefaultPageUrls.QuotesDetails)) {
      await browser.url(browser.options.baseUrl+DefaultPageUrls.QuotesDetails+guid);
    }
    await this.waitForQuotesDetailsPageLoaded();
  }

  // Page Logic
  /**
   * Create an invoice for the quote
   * 
   */
   public async createNewInvoice(): Promise<void> {
    await this.clickCreateInvoiceBtn();
    await this.clickCreateInvoiceComfirmBtn();
  }

  // Page Actions
  /**
   * Click on the create invoice btn
   */
  private async clickCreateInvoiceBtn(): Promise<void> {
    await (await this.quoteDetailsElements.createInvoiceBtn).click();
  }

  /**
   * Click the confirm button in the modal
   */
   private async clickCreateInvoiceComfirmBtn(): Promise<void> {
    await browser.waitUntil(async () => (await (this.quoteDetailsElements.createInvoiceConfirmBtn)).isClickable());
    await (await this.quoteDetailsElements.createInvoiceConfirmBtn).click();
  }

  /**
   * Wait for page fullly loaded
   */
  private async waitForQuotesDetailsPageLoaded(): Promise<void> {
    (await this.quoteDetailsElements.createInvoiceBtn).waitForExist(
      { timeoutMsg: `Quote Details page failed to load ${browser.getUrl()}` });
  }

}
