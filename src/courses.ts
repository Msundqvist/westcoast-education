import { courses } from './data/courses.js';
import { ICourses } from './models/ICourses';

const initApp = () => {
  listCourses();
};

const listCourses = () => {
  displayCourse(courses);
};

const displayCourse = (courses: Array<ICourses>) => {
  const app = document.querySelector('#courses') as HTMLDivElement;
  app.innerHTML = '';

  for (let course of courses) {
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');

    div.classList.add('courses');
    imageAnchor.href = `./course-detail.html?courseNumber=${course.courseNumber}`;
    image.alt = `${course.coursName}`;
    image.src = `/src/assets/images/${course.image}`;

    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

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
