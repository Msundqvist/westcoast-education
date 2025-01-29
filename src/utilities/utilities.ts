import { ICourses } from '../models/ICourses';

export const updateCart = (course: ICourses): void => {
  let courses: ICourses[] = JSON.parse(localStorage.getItem('cart')!) ?? [];
  courses.push(course);
  localStorage.setItem('cart', JSON.stringify(courses));
  courses = JSON.parse(localStorage.getItem('cart')!);
  document.querySelector('#cartItem')!.textContent = courses.length.toString();
};

export const getCartItems = (): ICourses[] => {
  const courses: ICourses[] = JSON.parse(localStorage.getItem('cart')!) ?? [];
  return courses;
};

export const UpdateCartItems = (): void => {
  const courses: ICourses[] = JSON.parse(localStorage.getItem('cart')!);
  if (courses) {
    document.querySelector('cartItem')!.textContent = courses.length.toString();
  }
};
