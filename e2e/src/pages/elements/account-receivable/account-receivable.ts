export class AccountReceivableElements {

  get invoiceDueDate() {return $('input[id*="DueDate"]'); }
  get approveBtn() { return $('a[title*="Approve"] span'); }
  get saveBtn() { return $('a[title*="Save as draft"] span'); }

  // draft invoice list
  get successMessage() { return $('div[id*="notify"] div.message p[id*="gen"]'); }
}
