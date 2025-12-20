import { defineFunction, secret } from '@aws-amplify/backend';

export const adminOffers = defineFunction({
  name: 'adminOffers',
  entry: './handler.ts',
  environment: {
    SPREADSHEET_ID: secret('SPREADSHEET_ID'),
    GOOGLE_APPLICATION_CREDENTIALS_JSON: secret('GOOGLE_APPLICATION_CREDENTIALS_JSON'),
    ADMIN_PASSWORD: secret('ADMIN_PASSWORD'),
  },
  timeoutSeconds: 30,
});
