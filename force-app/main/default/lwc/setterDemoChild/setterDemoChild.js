import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    user
    @api 
    get stud(){
        return this.user;
    }
    set stud(data){
      let newAge = data.age *2;

        this.user ={...data,age:newAge,'location': 'pune'};

    }
}