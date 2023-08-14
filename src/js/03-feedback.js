import { keys } from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const feedback = document.querySelector(".feedback-form")
//console.dir(feedback);

feedback.addEventListener('input', throttle( (inputFeedback), 500));
const form = {};
const obj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? []; 
function inputFeedback(evt) {
    evt.preventDefault();
    
      console.dir(obj); 
    
    if (Object.keys(obj).length === 0) {
        form[evt.target.name] = evt.target.value;
        let jsonForm = JSON.stringify(form);
        localStorage.setItem('feedback-form-state', jsonForm)}
     else {  
    
    form[evt.target.name] = obj['evt.target.name'] + evt.target.value;
    console.log(form);
    let jsonForm = JSON.stringify(form);
    localStorage.setItem('feedback-form-state', jsonForm);
    }
}
    //console.log(jsonForm);

 feedback.addEventListener('submit', resetInput)
function resetInput(evt) {
    
    evt.preventDefault();
    console.log(form);
    localStorage.clear();
    evt.target.reset();
}