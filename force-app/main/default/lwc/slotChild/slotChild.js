import { LightningElement } from 'lwc';

export default class SlotChild extends LightningElement {

    handleChange(){
        const ft =this.template.querySelector('.slds-card__footer');

        if (ft) {
            ft.classList.remove('slds-hide');
        }
    }
}