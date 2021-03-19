import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort, filter } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastName';

  @sort('model', 'customersSortProps')
  sortedCustomers;

  // @filter('model', 'customersFilterProps')
  // filteredCustomers;

  get customersSortProps() {
    return [this.sortProperty];
  }

  // get customersFilterProps (customer, index, array) {
  //   return customer
  // }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
  }
}
