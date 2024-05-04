import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {
    taskname = '';
    taskdate = null;
    completeTask = [];
    incompleteTask = [];

    changeHandler(event) {
        let { name, value } = event.target;
        if (name === 'taskName') {
            this.taskname = value;
            console.log('taskname-->> ', this.taskname);
        }
        else if (name === 'taskDate') {
            this.taskdate = value;
            console.log('taskdate-->> ', this.taskdate);
        }
    }

    resetHandler() {
        this.taskname = '';
        this.taskdate = null;
    }

    addTaskHandler() {
        console.log('inside');
        if (!this.taskdate) {
            //toISOString is used because salesforce accept in ISOString for date and it return date and time, to just return date we used slice
            // adding default date if nothing is there
            this.taskdate = new Date().toISOString.slice(0, 10);
        }

        if (this.validateTask()) {
            console.log('here');
            //here we can add into array directly but we need use @track decorator, to avoid that we used spread operator
            this.incompleteTask = [...this.incompleteTask, {
                taskname: this.taskname,
                taskdate: this.taskdate
            }];

            this.resetHandler();
            let sortArray = this.sortTask(this.incompleteTask);
            //here overriding the previous array which was not sorted with sorted array
            this.incompleteTask = [...sortArray];
            console.log('Final incomplete task-->> ', this.incompleteTask);
        }
    }

    validateTask() {
        console.log('validate');
        let isValid = true;
        let elment = this.template.querySelector('.taskname');

        if (!this.taskname) {
            isValid = false;
        }
        else {
            // find method will return the first item if found, else it will return undefined.
            let taskElement = this.incompleteTask.find((currentItem) => currentItem.taskname === this.taskname && currentItem.taskdate === this.taskdate)
            if (taskElement) {
                isValid = false;
                elment.setCustomValidity('Task is already added');
            }
        }

        if (isValid) {
            elment.setCustomValidity('');
        }

        elment.reportValidity();
        console.log('isvalid-->>', isValid);
        return isValid;
    }

    sortTask(inputArr) {
        let sortedArray = inputArr.sort((a, b) => {
            const DATEA = new Date(a.taskdate);
            const DATEB = new Date(b.taskdate);
            return DATEA - DATEB
        })

        return sortedArray
    }

    removeHandler(event) {
        let index = event.target.name;
        this.incompleteTask.splice(index, 1);
        let sortArray = this.sortTask(this.incompleteTask);
        this.incompleteTask = [...sortArray];

    }

    completeHandler(event) {

        let index = event.target.name;
        //removing task from incomplete list 
        let removeItem = this.incompleteTask.splice(index, 1); //splice return the array of removing item
        let sortArray = this.sortTask(this.incompleteTask);
        this.incompleteTask = [...sortArray];

        //adding task into complete task array
        this.completeTask = [...this.completeTask, removeItem[0]];

    }

    //to set the data when dragging, use this methods
    dragHandler(event) {
        event.dataTransfer.setData("index", event.target.dataset.item) // dataTransfer is used to set data when dragging , index naming is used it can be any name, dataset.item is used to get datafrom data-item attribute for that index
    }

    //to prevent the default behaviour for dropover
    allowdrop(event) {
        event.preventDefault();
    }

    // to get the data from setData method
    dropHandler(event) {
        let index = event.dataTransfer.getData("index") // this is the method to get data
        //removing task from incomplete list 
        let removeItem = this.incompleteTask.splice(index, 1); //splice return the array of removing item
        let sortArray = this.sortTask(this.incompleteTask);
        this.incompleteTask = [...sortArray];

        //adding task into complete task array
        this.completeTask = [...this.completeTask, removeItem[0]];
    }
}