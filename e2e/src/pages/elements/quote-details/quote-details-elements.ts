export class QuoteDetailsElements {

  get createInvoiceBtn() { return $('button[data-automationid*="createInvoice"]'); }

  // footer
  get createInvoiceConfirmBtn() { return $('footer button[data-automationid*="CreateInvoiceModal--action-delete"]'); }
}
