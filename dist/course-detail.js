import { courses } from './data/courses.js';
import { createCourseDetailsDisplay, createOverlay } from './utilities/dom.js';
import { UpdateCartItems } from './utilities/utilities.js';
const addCourseToCartButton = document.querySelector('addToBooked');
let cours;
const initApp = () => {
    UpdateCartItems();
    findCourse();
};
const findCourse = () => {
    const courseNumber = location.search.split('=')[1];
    // med plustecknet ändrar man om datatypen. i dettafall number till string
    const course = courses.find((c) => c.courseNumber === +courseNumber);
    if (course) {
        displaycourse(course);
    }
    else {
        displayError();
    }
};
const addToBooked = () => {
    console.log('tillagt');
};
const displaycourse = (courses) => {
    document
        .querySelector('#details')
        ?.appendChild(createCourseDetailsDisplay(courses));
    document
        .querySelector('#details')
        ?.appendChild(createOverlay(courses.background));
};
const displayError = () => { };
document.addEventListener('DOMContentLoaded', initApp);
addCourseToCartButton?.addEventListener('click', addToBooked);
