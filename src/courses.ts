import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses';

const initApp = () => {
  listCourses();
};

const listCourses = () => {
  displayCourse(courses);
};
// skapade första delen av en funktion för att byta ut document.create...
const createElement = (element: string): HTMLElement => {
  return document.createElement(element);
};
const displayCourse = (courses: Array<ICourses>) => {
  const app = document.querySelector('#all-courses') as HTMLDivElement;
  app.innerHTML = '';

  for (let course of courses) {
    const div = createElement('div') as HTMLDivElement;
    const imageAnchor = createElement('a') as HTMLAnchorElement;
    const image = createElement('img') as HTMLImageElement;
    const cardBody = createElement('div') as HTMLDivElement;
    const heading = createElement('h5') as HTMLHeadingElement;
    const p = createElement('p') as HTMLParagraphElement;
    const small = createElement('small') as HTMLElement;

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
const displayProductDetails = (e: any) => {
  console.log(e.currentTarget.id);
  const courseNumber = e.currentTarget.id;
  location.href = `./course-Detail.html?id=${courseNumber}`;
};
document.addEventListener('DOMContentLoaded', initApp);
