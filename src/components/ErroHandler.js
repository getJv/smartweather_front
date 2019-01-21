import PubSub from 'pubsub-js';

export default class TratadorErros {
    publicaErros(err){
        
        
        PubSub.publish("errorValidationStream",'Invalid Location');
    }
  }
