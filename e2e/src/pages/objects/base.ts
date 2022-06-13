import * as timeout from '@const/timeoutConst';

import { BaseElements } from '@pages/elements/base-elements';
import { Credentials } from '@type/credentials';
import { LoginObject } from '@pages/objects/login/login-object';

export class BaseObject {

  baseElements = new BaseElements();
  
  loginObject = new LoginObject();

  public async logIn(credentials: Credentials): Promise<void> {
    await this.loginObject.logIn(credentials);
  }

  public async timer(seconds: number = 0.5): Promise<void> {
    const time = new Date().getTime();
    while (new Date().getTime() < time + (seconds * 1000)) {
      await browser.pause(500);
    }
  }

  public async confirmLoginedWithNavbar(elementReverse: boolean = false, browserTimeout: number = timeout.browserTimeout5Secs) {
    try {
      await (await (this.baseElements.logOutNav)).waitForDisplayed({
        reverse: elementReverse ? elementReverse : false,
        timeout: browserTimeout,
        timeoutMsg: 'Did not find the logOut Nav item, Login Failed Or Performance issue on login Timeout'
      });
      return true;
    } catch {
      return false;
    }
  }

}
