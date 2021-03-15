import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { empty} from '@ember/object/computed';
import { A } from '@ember/array';

export default class CustomersTableComponent extends Component {
  @service router;
  @empty('model') isEmpty;

  get model() {
    return this.args.model ? this.args.model : A();
  }

  get columns() {
    return [
      {
        name: 'First Name',
        valuePath: 'firstName',
        isSortable: false
      },
      {
        name: 'Last Name',
        valuePath: 'lastName',
        isSortable: false
      },
      {
        name: 'Email',
        valuePath: 'emailAddress',
        width: 200,
        isSortable: false,
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        name: 'Company',
        valuePath: 'company',
        isSortable: false,
        breakpoints: ['desktop', 'jumbo']
      },
      {
        name: 'Project',
        valuePath: 'project',
        isSortable: false,
        breakpoints: ['desktop', 'jumbo']
      },
      {
        name: 'Budget',
        valuePath: 'budget',
        isSortable: false,
        breakpoints: ['jumbo']
      }
    ]
  }

  @action
  onRowClick(row) {
    this.router.transitionTo('customers.customer', row.id);
  }
}
