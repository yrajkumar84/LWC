import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { publish, MessageContext } from 'lightning/messageService';
// import  RecordSelected  from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class LmsA extends LightningElement {

    @wire(getContactList)
    contacts;

    @wire(MessageContext)
    context;
    handleContactSelect(event) {
        const payload = { recordId: event.target.contact.Id };

        publish(this.messageContext, recordSelected, payload);
    }

    // inputVal
    // inpuHandler(event){
    //     this.inputVal = event.target.value;
    // }

    // publishMsg(){
    //     const msg = {
    //         lmsData:{
    //             value: this.inputVal
    //         }
    //     }
    //     // publish(MessageCOntext,messagechannel ,message)
    //     publish(this.context,SAMPLEMC,msg)
    // }
}