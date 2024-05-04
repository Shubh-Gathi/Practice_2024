import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    constructor() {
        super();
        console.log("Child Constructor called")
    }

    connectedCallback() {
        console.log("Child connectedcallback called")
        throw new error("error while loading component");
    }

    renderedCallback() {
        console.log("Child renderedcallback called")
    }

    errorCallback(error, stack) {
        console.log("Child errorcallback called")
    }

    disconnectedCallback() {
        console.log("child disconnectedcallback called")
    }
}