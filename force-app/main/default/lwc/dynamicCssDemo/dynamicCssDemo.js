import { LightningElement } from 'lwc';

export default class DynamicCssDemo extends LightningElement {
    pColor = "chocalate-color"; // one way of adding dynamic css;

    addHandler(event) {
        let elements = this.template.querySelector('p');
        elements.classList.add('green-border');
    }

    removeHandler(event) {
        let elements = this.template.querySelector('p');
        elements.classList.remove('green-border');
    }

    toggleHandler(event) {
        let elements = this.template.querySelector('p');
        elements.classList.toggle('green-border');
    }

}