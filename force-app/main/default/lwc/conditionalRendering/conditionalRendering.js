import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayMessage = false;

    clickHandler(event) {
        this.displayMessage = !this.displayMessage;
        console.log('displayMessage-->> ', this.displayMessage);
    }
}