import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {
    contactList = [
        {
            id: 1,
            fname: 'Tim',
            lname: 'cook'
        },
        {
            id: 2,
            fname: 'Mark',
            lname: 'Benioff'
        },
        {
            id: 3,
            fname: 'Sundar',
            lname: 'Pichai'
        },
        {
            id: 4,
            fname: 'Elon',
            lname: 'Musk'
        }
    ]
}