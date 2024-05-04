import { LightningElement, track } from 'lwc';

export default class DecoratorDemo extends LightningElement {
    greeting = "Hello World!!"
    @track welcome = "Welcome to Tech Journey!!" // here the track decorator doesn't matters because the by default the property will be track

    clickHandler(event) {
        this.greeting = "Hey World!!"
        this.welcome = "Welcome to India!!"
    }
    //    demostration of @track, it requries when private property of an object or an array needs to update
    // @track does not requires when whole object or an array is updated or refresh.

    @track myDetails = { fname: 'shubham', lname: 'Gathi' };
    @track myTask = ['office', 'meeting', 'bootcamp'];

    handleClick(event) {
        this.myDetails.fname = "Vicky";
    }

    handleArray(event) {
        this.myTask.push('self study');
    }

    handleData(event) {
        this.myDetails = { fname: 'Vicky', lname: 'gathibandhe' }; // here without using track will work because complete object we are updating not single property
    }
}