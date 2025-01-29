import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses.js';
import { createCourseDetailsDisplay, createOverlay } from './utilities/dom.js';

const initApp = () => {
  findCourse();
};

const findCourse = (): void => {
  const courseNumber = location.search.split('=')[1];
  // med plustecknet ändrar man om datatypen. i dettafall number till string
  const course = courses.find((c) => c.courseNumber === +courseNumber);
  if (course) {
    displaycourse(course);
  } else {
    displayError();
  }
};

const displaycourse = (courses: ICourses) => {
  document
    .querySelector('#details')
    ?.appendChild(createCourseDetailsDisplay(courses));
  document
    .querySelector('#details')
    ?.appendChild(createOverlay(courses.background));
};

const displayError = () => {};
document.addEventListener('DOMContentLoaded', initApp);
