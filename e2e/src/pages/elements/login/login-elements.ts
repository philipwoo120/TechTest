export class LoginElements {

  // login page elements
  get username() { return $('input#xl-form-email'); }
  get password() { return $('input#xl-form-password'); }
  get loginBtn() { return $('button#xl-form-submit'); }

}
