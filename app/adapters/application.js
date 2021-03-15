import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'ember-code-challenge/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
    host = ENV.API_BASE_URL;
}
