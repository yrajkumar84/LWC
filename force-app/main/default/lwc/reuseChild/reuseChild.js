import { LightningElement } from 'lwc';

export default class ReuseChild extends LightningElement {

    handleSlot(){
        const ele = this.template.querySelector(".slds-card__footer");
        if (ele) {
            ele.classList.remove('slds-hide')
        }
    }
}