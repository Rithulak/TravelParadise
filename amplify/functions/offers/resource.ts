import { defineFunction, secret } from '@aws-amplify/backend';

export const offers = defineFunction({
  name: 'offers',
  entry: './handler.ts',
  environment: {
    SPREADSHEET_ID: secret('SPREADSHEET_ID'),
    GOOGLE_APPLICATION_CREDENTIALS_JSON: secret('GOOGLE_APPLICATION_CREDENTIALS_JSON'),
  },
  timeoutSeconds: 30,
});
