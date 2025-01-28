import { ICourses } from './models/ICourses.js';
import { HttpClient } from './utilities/HttpClient.js';
const courseList = document.querySelector('#courses');
const initApp = () => {};

const listAllCourses = async (): Promise<ICourses[]> => {
  const http = new HttpClient('http://localhost:3000/products');
  const response = await http.Get();
  return response;
};

const loadCourses = async () => {
  const courses = await listAllCourses();
  console.log(courses);
};

document.addEventListener('DOMContentLoaded', initApp);
