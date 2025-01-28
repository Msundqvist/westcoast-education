import { ICourses } from './ICourses';
import { IUser } from './IUser';

export interface IOrder {
  id: String;
  user: IUser;
  courseItems: ICourses[];
}
