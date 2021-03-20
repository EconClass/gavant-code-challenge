import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomersIndexRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('customer', { reload: true });
  }
}
