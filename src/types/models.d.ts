export declare interface IUser {
  name: string;
  _id: string;
  lastName: string;
  class: string;
  verified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDepartment {
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserState {
  user: any[]; // Change any[] to the actual type of user data
  users: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
  isAdminTeacher: boolean;
}
