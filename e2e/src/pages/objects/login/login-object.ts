import { Credentials } from '@type/credentials';
import { LoginElements } from '@pages/elements/login/login-elements';

export class LoginObject {

  loginElements = new LoginElements();

  public async logIn(credentials: Credentials): Promise<void> {
    try {
      console.log('============== Login: Start Login =================');
      await browser.url(browser.options.baseUrl);

      // start to input the info
      await browser.waitUntil(async () => (await browser.getUrl()).includes('login'));
      await browser.waitUntil(async () => (await (this.loginElements.username)).isClickable());
      await (await (this.loginElements.username)).setValue(credentials.USERNAME);
      await (await (this.loginElements.password)).setValue(credentials.PASSWORD);
      await (await (this.loginElements.loginBtn)).click();
      console.log('============== Login: Login Successed =================');
    } catch (error) {
      console.log('============== Login: Login process failed, Plese check' +
        'the default username and the password =================');
    }
  }

}
