import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api display; //small case
    @api displayGreeting // camel case
    // @api user; //object
    @api isUserAvailable = false // boolean
    displayuser;

    @api get user() {
        return this.displayuser;
    }

    set user(value) {
        let cloneuser = { ...value };
        this.displayuser = cloneuser.channel.toUpperCase();
    }
}