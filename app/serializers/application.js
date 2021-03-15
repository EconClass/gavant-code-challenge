import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  serialize(snapshot, options) {
    if(!options) {
      options = {};
    }

    //include the record ID in the request body for PUTs, ect
    options.includeId = true;
    return super.serialize(snapshot, options);
  }
}
