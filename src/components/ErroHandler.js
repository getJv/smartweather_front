import PubSub from 'pubsub-js';

export default class TratadorErros {
    error(err){  
        PubSub.publish("errorValidationStream",err);
    }
  }
