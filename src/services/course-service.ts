import { ICourses } from '../models/ICourses.js';
import { HttpClient } from '../utilities/HttpClient.js';

export const listAllCourses = async (): Promise<ICourses[]> => {
  const http = new HttpClient('Http://localhost:3000/courses');
  const response = await http.Get();
  return response;
};

export const getCourse = async (courseNumber: string): Promise<ICourses> => {
  const http = new HttpClient(
    `http://localhost:3000/courses?courseNumber=${courseNumber}`
  );
  const response = await http.Get();
  return response[0];
};
