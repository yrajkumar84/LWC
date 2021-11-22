import { LightningElement } from 'lwc';

export default class MyFirstApp extends LightningElement {
    myname = ''
    handleInput(event){
        this.myname = event.target.value;
    }
}