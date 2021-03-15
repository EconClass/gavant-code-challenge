import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CustomersCustomerController extends Controller {
    @action
    async saveCustomer(event) {
        event.preventDefault();
        await this.model.save();
        this.transitionToRoute('customers.index');
    }
}
