import {  LightningElement ,api} from 'lwc';

export default class LwcAura extends LightningElement {

    @api title
    
    callAura(){
       const eventd = new CustomEvent('sendmsg', {
           detail: {"msg":"My Newg"}
       });
       this.dispatchEvent(eventd);
            
    }

    clearAura(){
        const event = new CustomEvent('clearmsg', {
            detail: { "msg" : "2nd msg" }
        });
        this.dispatchEvent(event);
    }
}
