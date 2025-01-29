import { ICourses } from './models/ICourses.js';
import { IOrder } from './models/IOrder.js';
import { IUser } from './models/IUser.js';
import { getCartItems, UpdateCartItems } from './utilities/utilities.js';
const formCheckout = document.querySelector<HTMLFormElement>('#form');
const courseList = document.querySelector('#all-courses');
let cours: ICourses[];
const initApp = () => {
  loadOrders();
};

const loadOrders = () => {
  UpdateCartItems();
  cours = getCartItems();
  createCourseListDisplay(cours);
};

const handleUser = async (e: any) => {
  e.preventDefault();
  if (formCheckout === null) return;
  const data = new FormData(formCheckout);
  const formData = Object.fromEntries(data);

  formData.id = crypto.randomUUID();

  const user: IUser = {
    id: formData.id,
    userName: formData.UserName.toString(),
    billingAdress: formData.billingAdress.toString(),
    email: formData.email.toString(),
    mobileNumber: formData.toString(),
  };

  const order: IOrder = {
    id: crypto.randomUUID(),
    user: user,
    courseItems: cours,
  };

  try {
    await fetch('http://localhost:3000/courses/'),
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      };
  } catch (error) {
    console.log(error);
  }
};
const createCourseListDisplay = (courses: ICourses[]): void => {
  courseList!.innerHTML = '';

  if (courses.length === 0) {
    courseList!.innerHTML =
      '<h2 style="text-align:center">Du har inget i kundvagnen än</h2>';
  }
};
document.addEventListener('DOMContentLoaded', initApp);
formCheckout?.addEventListener('submit', handleUser);
