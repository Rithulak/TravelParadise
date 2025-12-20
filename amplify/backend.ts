import { defineBackend } from '@aws-amplify/backend';
import { offers } from './functions/offers/resource';
import { offers2 } from './functions/offers2/resource';
import { adminOffers } from './functions/adminOffers/resource';
import { saveCookieConsent } from './functions/saveCookieConsent/resource';
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  offers,
  offers2,
  adminOffers,
  saveCookieConsent,
});

// Create REST API Gateway for the functions
const apiStack = backend.createStack('api-stack');

const restApi = new RestApi(apiStack, 'TravelParadiseApi', {
  restApiName: 'TravelParadiseApi',
  deploy: true,
  deployOptions: {
    stageName: 'prod',
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: ['Content-Type', 'Authorization'],
  },
});

// Add Lambda integrations
const offersIntegration = new LambdaIntegration(
  backend.offers.resources.lambda
);
const offers2Integration = new LambdaIntegration(
  backend.offers2.resources.lambda
);
const adminOffersIntegration = new LambdaIntegration(
  backend.adminOffers.resources.lambda
);
const saveCookieConsentIntegration = new LambdaIntegration(
  backend.saveCookieConsent.resources.lambda
);

// Create API resources
const offersResource = restApi.root.addResource('offers');
offersResource.addMethod('GET', offersIntegration, {
  authorizationType: AuthorizationType.NONE,
});

const offers2Resource = restApi.root.addResource('offers2');
offers2Resource.addMethod('GET', offers2Integration, {
  authorizationType: AuthorizationType.NONE,
});

const adminOffersResource = restApi.root.addResource('adminOffers');
adminOffersResource.addMethod('GET', adminOffersIntegration, {
  authorizationType: AuthorizationType.NONE,
});
adminOffersResource.addMethod('POST', adminOffersIntegration, {
  authorizationType: AuthorizationType.NONE,
});
adminOffersResource.addMethod('PUT', adminOffersIntegration, {
  authorizationType: AuthorizationType.NONE,
});
adminOffersResource.addMethod('DELETE', adminOffersIntegration, {
  authorizationType: AuthorizationType.NONE,
});

const saveCookieConsentResource = restApi.root.addResource('saveCookieConsent');
saveCookieConsentResource.addMethod('POST', saveCookieConsentIntegration, {
  authorizationType: AuthorizationType.NONE,
});

// Add outputs for the API URL
backend.addOutput({
  custom: {
    API: {
      endpoint: restApi.url,
    },
  },
});
