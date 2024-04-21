// JS Events //

// function clickme() {
//     alert('Welcome alert')
// }

// function mouseoverHandler() {
//     let element = document.querySelector(".hoverme");
//     element.style.display = "none";
// }

// function mouseoutHandler() {
//     let element = document.querySelector('.hoverme')
//     element.style.display = "";

// }

// function changeHandler(event) {
//     console.log(event.target.value);
// }

// function eventHandler(event) {
//     let value = event.target.value;
//     console.log('value-->> ', value);

//     if (value == 10) {
//         //step 1
//         const myEvent = new CustomEvent('valueten', {
//             detail: {
//                 message: 'Values has been accessed',
//             },
//         });

//         //step 2
//         document.dispatchEvent(myEvent);
//     }
// }

//step 3
// document.addEventListener('valueten', (event) => {
//     console.log('access event-->> ', event.detail.message);
// });

// let intervalDetails = '';
// intervalDetails = setInterval(() => {
//     console.log('Time Interval Executes');
// }, 5000);

// setTimeout(() => {
//     console.log('intervalDetails-->> ', intervalDetails);
//     clearInterval(intervalDetails);
//     console.log('Time interval stops')
// }, 15000)

// export and import in JS
// import sum, { weeks, Date_Of_Year, sayHi } from './utils.js';
// console.log(weeks);
// console.log(Date_Of_Year);
// sayHi('Hello from JS');
// sum(3, 5);

// to import everything at once follow as per this
//import * as lwc(this is alias) from './utils.js';


// Async await and promises
// to imporve the performance of application and callbacks in such situation we need async or promises
// also when there is callbacks hell i.e when once function inside another i.e nest multiple callbacks called callback hells,
// to avoid this we need async or promises

// function generate(message) {
//     return new Promise((resolve, reject) => {
//         if (!message) {
//             reject('error accessing message');
//         } else {
//             setTimeout(() => {
//                 console.log(message)
//                 resolve();
//             }, 1000);
//         }
//     })
// }

// calling the promise
// generate('hello world').then(() => {
//     console.log('Promise accessed')
// }).catch((error) => {
//     console.log('error occured', error);
// });

// chaining of callbacks i.e callback hell it is handled by using promise or async await
// generate('hello world').then(() => {
//     console.log('pormise accessed');
//     generate()
//     console.log('second callback execute')
// }).then(() => {
//     console.log('second call execute')
// }).catch((error) => {
//     console.log('error occured ', error);
// });

//async function
// async function docmessage() {
//     try {
//         await generate('call generate function');
//         await generate('call 2nd time generate function');
//     }
//     catch (error) {
//         console.log('error occured-->> ', error.message);
//     }
// }
// docmessage();

// promise method
//promise.all([promise1, promise2]) // it will retrun promise only when both the promises are true otherwise it execute reject block

// function resolveTimeOut(value, delay) {
//     return new Promise((resolve) =>
//         setTimeout(() => {
//             resolve(value);
//         }, delay))

// }

// function rejectTimeOut(reason, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(reason);
//         }, delay)
//     })
// }

// async function load() {
//     let promise1 = resolveTimeOut('promise 1', 5000);
//     //let promise1 = rejectTimeOut('promise1', 5000);
//     //let promise2 = resolveTimeOut('promise2', 7000);
//     let promise2 = rejectTimeOut('Promise Reject', 7000);
//     const allpromise = Promise.race([promise1, promise2]);

//     try {
//         const lists = await allpromise;
//         console.log('lists-->> ', lists)
//     } catch (error) {
//         console.log('error-->> ', error);
//     }
// }
// load();

// promise.any(promise) // similar to promise.all but here it will ignore reject block and gives promise
// promise.race([promise1,promise2]) // here all the promises race against each other and whichever gets first i.e resolve or reject it will return.


//Fetch API and Debugging
// fetchAPI allows to make HTTP request to server
//syntax fetchAPI('url', {options})
// its gives output as promise which is in readable stream so to make it in readable form we use .json() which also gives promise


// function generate() {
//     fetch('https://reqres.in/api/users', {
//         method: 'GET',
//     }).then((response) => response.json())
//         .then((data) => console.log(data));
// }

// generate();

// using async await

// async function docUser() {
//     let response = await fetch('https://cdn2.thecatapi.com/images/ebv.jpg', { method: "GET" });
//     let data = await response.json();
//     console.log('data-->>', data);
// }

// docUser();

// debugging

// function CalculateSum(arr) {
//     //debugger;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const numbers = [5, 4, 3, 2, 1];
// const total = CalculateSum(numbers);
// console.log('total-->> ', total);