## Running end-to-end tests
Run `npm ci` to install all the moudules

Please check the chrome version e2e\src\wdio.conf.js and setup the version with same version of the local chrome
```
const seleniumConfig = {
  drivers: { chrome: { version: '102.0.5005.27' } },
};
```
the version info is on [https://chromedriver.storage.googleapis.com/](https://chromedriver.storage.googleapis.com/)

1. Run `npm run e2e` to execute the tests locally

```
APP_ENV=test npm run e2e
```
Or using the varibles inside the .env file

## Test Scenarios

#### Tech view risks: 

1. Table
2. Calculating
3. Href link


#### Contents view risks: 

1. Status
2. Add note function
3. Drop Down list - xui-actions--primary
4. Attach files
5. Inclusive or exclusive GST

#### test scenarios design:

1. As a Xero User, While the quote includes attached files, when I open the quote details page, then I should be able to see the attchments
2. As a Xero User, In order to check the invoice price includes, when I open the quote details page, all the digital caculation should be correct based on the items listed
3. As a Xero User, in order to manage all the quote notes, I can add new notes to the existing quote
4. As a Xero User, when I open the quote detail page, I should be able to click the cusomer name to redirect to the customer's Contact page
5. As a Xero User, when I open the quote detail page, I should be able to see the actions list such as 'Send / Mark as invoiced / unmark as accepted / Copy To / Delete' action list
6. As a Xero User, when I open the quote detail page, I should be able to see the quote status correct such as invoiced / accepted / draft / Sent / Declined


