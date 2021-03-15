import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomersCustomerRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('customer', params.customer_id);
  }
}
