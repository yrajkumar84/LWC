import { LightningElement, wire } from 'lwc';

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import { reduceErrors } from 'c/ldsUtils';

// import  recordSelected   from "@salesforce/messageChannel/SampleMessageChannel__c";
import {APPLICATION_SCOPE,
    MessageContext,publish
    ,subscribe,unsubscribe,} from 'lightning/messageService';
    import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const fields = [
    NAME_FIELD,
    TITLE_FIELD,
    PHONE_FIELD,
    EMAIL_FIELD,
   
];

export default class LmsX extends LightningElement {

    subscription = null;
    recordId;

    Name;
    Title;
    Phone;
    Email;


    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ error, data }) {
        if (error) {
            this.dispatchToast(error);
        } else if (data) {
            fields.forEach(
                (item) => (this[item.fieldApiName] = getFieldValue(data, item))
            );
        }
    }

    @wire(MessageContext)
    messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
        this.recordId = message.recordId;
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    // Helper
    // dispatchToast(error) {
    //     this.dispatchEvent(
    //         new ShowToastEvent({
    //             title: 'Error loading contact',
    //             // message: reduceErrors(error).join(', '),
    //             variant: 'error',
    //         })
    //     );
    // }


}