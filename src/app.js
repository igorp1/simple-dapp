"use strict";

// necessary imports
import Rx from 'rxjs/Rx'; 

// this is where the number will be output
const output = document.getElementById('output');
function writeNumber(n) {
    output.textContent = n;
}

// fire this off when the document is ready:
function setupContractConnection(){
    // do work
    writeNumber(Math.floor(Math.random()*100));
}
document.addEventListener("DOMContentLoaded", 
    (event) => { 
        setupContractConnection();    
});

// observable for set action
const set_btn = document.getElementById('set-btn');
const setBtnStream$ = Rx.Observable.fromEvent(set_btn, 'click');
setBtnStream$.subscribe(
    (e) => {  
        /* event */ 
        let value = Number(document.getElementById("set-input").value);
        alert(`Setting value to ${value}...`); 
    },
    (err) => { /* error */ },
    () => { /* completed */ }
);

// observable for add action
const add_btn = document.getElementById('add-btn');
const addBtnStream$ = Rx.Observable.fromEvent(add_btn, 'click');
addBtnStream$.subscribe(
    (e) => {  
        /* event */
        let value = Number(document.getElementById("add-input").value);
        alert(`Adding ${value} ...`);
    },
    (err) => { /* error */ },
    () => { /* completed */ }
);

// observable for increment action
const inc_btn = document.getElementById('inc-btn');
const incBtnStream$ = Rx.Observable.fromEvent(inc_btn, 'click');
incBtnStream$.subscribe(
    (e) => {  /* event */ alert('Incrementing value...')  },
    (err) => { /* error */ },
    () => { /* completed */ }
);

// observable for reset action
const res_btn = document.getElementById('res-btn');
const resBtnStream$ = Rx.Observable.fromEvent(res_btn, 'click');
resBtnStream$.subscribe(
    (e) => {  /* event */ alert('Resetting value...')  },
    (err) => { /* error */ },
    () => { /* completed */ }
);


