import { courses } from './data/courses.js';
const initApp = () => {
    listCourses();
};
const listCourses = () => {
    displayCourse(courses);
};
// skapade första delen av en funktion för att byta ut document.create...
const createElement = (element) => {
    return document.createElement(element);
};
const displayCourse = (courses) => {
    const app = document.querySelector('#all-courses');
    app.innerHTML = '';
    for (let course of courses) {
        const div = createElement('div');
        const imageAnchor = createElement('a');
        const image = createElement('img');
        const cardBody = createElement('div');
        const heading = createElement('h5');
        const p = createElement('p');
        const small = createElement('small');
        div.classList.add('card');
        imageAnchor.href = `./course-detail.html?courseNumber=${course.courseNumber}`;
        image.alt = `${course.coursName}`;
        image.src = `/src/assets/images/${course.image}`;
        imageAnchor.appendChild(image);
        div.appendChild(imageAnchor);
        cardBody.classList.add('card-body');
        heading.classList.add('card-title');
        heading.textContent = course.coursName;
        p.classList.add('card-text');
        small.textContent = `Kursstart: ${course.startDate} `;
        p.appendChild(small);
        cardBody.append(heading);
        cardBody.append(p);
        div.append(cardBody);
        app.appendChild(div);
    }
};
// const displayCourse = (courses: Array<ICourses>) => {
//   const app = document.querySelector('#courses') as HTMLDivElement;
//   app.innerHTML = '';
//   app.appendChild(createDisplayCard(show, 'show-details.html'));
// };
const displayProductDetails = (e) => {
    console.log(e.currentTarget.id);
    const courseNumber = e.currentTarget.id;
    location.href = `./course-Detail.html?id=${courseNumber}`;
};
document.addEventListener('DOMContentLoaded', initApp);
