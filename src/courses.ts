import { ICourses } from './models/ICourses.js';
import { HttpClient } from './utilities/HttpClient.js';
const courseList = document.querySelector('#courses');
const initApp = () => {
  loadAllCourses();
};

const loadAllCourses = async (): Promise<ICourses[]> => {
  const http = new HttpClient('http://localhost:3000/products');
  const response = await http.Get();
  return response;
};
const displayCourseDetails = (e: any) => {
  console.log(e.currentTarget.id);
};
document.addEventListener('DOMContentLoaded', initApp);
