import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = '';
    numberTwo = '';
    result = 0;

    handlerChangeNumberOne(event) {
        this.numberOne = event.target.value;
        console.log('numberOne-->> ', this.numberOne);
    }

    handlerChangeNumberTwo(event) {
        this.numberTwo = event.target.value;
        console.log('numberTwo-->> ', this.numberTwo);
    }

    addHandler(event) {
        this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
        this.numberOne = '';
        this.numberTwo = '';
    }
    subtractHandler(event) {
        this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
        this.numberOne = '';
        this.numberTwo = '';
    }
    multiHandler(event) {
        this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
        this.numberOne = '';
        this.numberTwo = '';
    }
    divHandler(event) {
        this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
        this.numberOne = '';
        this.numberTwo = '';
    }
}