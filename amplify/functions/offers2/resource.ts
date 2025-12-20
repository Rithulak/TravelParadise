import { defineFunction, secret } from '@aws-amplify/backend';

export const offers2 = defineFunction({
  name: 'offers2',
  entry: './handler.ts',
  environment: {
    SPREADSHEET_ID: secret('SPREADSHEET_ID'),
    GOOGLE_APPLICATION_CREDENTIALS_JSON: secret('GOOGLE_APPLICATION_CREDENTIALS_JSON'),
  },
  timeoutSeconds: 30,
});
