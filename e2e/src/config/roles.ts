import 'dotenv/config';

import { ConfigRoles } from '@type/credentials';

// set the password through the tests - using either .env file or Azure Devops / AWS keyVault or using Jenkins Credentails
const password = process.env.E2EPassword;

export const roles: ConfigRoles = {
  ADMIN: {
    ADMIN: {
      USERNAME: 'philipwoo120@gmail.com',
      // do not setup the password here as it is the sensitive information
      PASSWORD: password
    }
  }
};
