import 'dotenv/config';

import { Sites } from '@type/sites';

const envUrl = require('@config/env-urls');

// return the testing urls as the varibles from running command lines
const getSiteInfo = (): Sites => {
  const appenv = (process.env.APP_ENV) ? process.env.APP_ENV : 'local';
  return envUrl.getEnvironmentUrls(appenv);
};

export const siteInfo: Sites = getSiteInfo();
