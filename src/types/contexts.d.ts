export declare interface JWTState {
  isAuthenticated?: boolean;
  isInitialised?: boolean;
  user?: User | null;
}

export declare interface User extends Document {
  name: string;
  lastName: string;
  email?: string;
  password: string;
  profilePicUrl?: string;
  roles?: [];
  verified?: boolean;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export declare interface DecodedToken {
  [key: string]: string | number | date;
}

export declare type LoginPromise = () => Promise<void>;
