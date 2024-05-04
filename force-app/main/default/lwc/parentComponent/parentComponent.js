import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    greeting = "Welcome to Tech Journey";
    userDetails = {
        firstName: 'shubham',
        lastName: 'Gathi',
        channel: 'You Tube'
    }
}