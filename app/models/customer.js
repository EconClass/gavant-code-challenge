import Model, { attr } from '@ember-data/model';

export default class CustomersModel extends Model {
    @attr('string') firstName;
    @attr('string') lastName;
    @attr('string') emailAddress;
    @attr('string') phoneNumber;
    @attr('string') company;
    @attr('string') project;
    @attr('number') budget;
}
