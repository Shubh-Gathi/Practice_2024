import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    isChecked = false;
    constructor() {
        super();
        console.log("Parent Constructor called");
    }

    connectedCallback() {
        console.log("Parent connectedcallback called");
    }

    renderedCallback() {
        console.log("Parent renderedcallback called");
    }

    errorCallback(error, stack) {
        console.log("Parent errorcallback called");
        console.log("error-->> ", error);
        console.log("stack-->> ", stack);
    }

    disconnectedCallback() {
        console.log("child disconnectedcallback called");
    }

    changeHandler(event) {
        this.isChecked = event.target.checked;
    }
}