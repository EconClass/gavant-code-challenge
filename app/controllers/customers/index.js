import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort, filter } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastName';
  @tracked keyword = '';

  @sort('model', 'customersSortProps')
  sortedCustomers;

  @filter('sortedCustomers', (customer) => {
    const {lastName, project, company} = customer
    if(lastName == this.keyword || project == this.keyword || company == this.keyword) {
      return customer
    }
  })
  filteredCustomers;

  get customersSortProps() {
    return [this.sortProperty]
  }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
  }

  @action
  searchByKeyword(event) {
    this.keyword = event.target.value
  }
}
