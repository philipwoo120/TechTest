import { Sites } from '@type/sites';

// set up the testing Urls includes portal and able to setup all the other urls as well
module.exports.getEnvironmentUrls = (environment: string): Sites => {
  let portalUrl: string;

  // able to use switch to choice different Env as staging / local / pre-production and so on
  switch (environment) {
    case 'test':
      // using the real test portal Env to switch the default local Url
      portalUrl = 'https://go.xero.com/';
      break;
    default:
      portalUrl = 'https://go.xero.com/';
      break;
  }
  return {
    portalUrl
  };
};
