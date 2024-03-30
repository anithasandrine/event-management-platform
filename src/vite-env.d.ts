/// <reference types="vite/client" />
type YearOfStudyAttributes = {
  id: string;
  name: string;
};

type StudentAtribute = {
  id: string;
  department: string;
  updatedEmail: string;
  name: string;
  updatedPhone: string;
  regNo: string;
  YearOfStudy: YearOfStudyAttributes;
  profilePicture: string;
  phoneToken: string | null;
  emailToken: string | null;
  storeEmail: string | null;
  storePhone: string | null;
};

type StudentSignupATributes = {
  regNo: string;
  updatedEmail: string;
  updatedPhone: string;
  password: string;
  confirmPassword: string;
};

type Responce = {
  message: string;
  JWT?: string;
  role?: string;
  [key: string]: string;
};

type RoginResponce = {
  JWT: string;
  role: string;
  profilePicture: string;
  name: string;
  id: string;
  message: string;
};
type ErrorAtributes = {
  isOperational: boolean;
  originalError: string;
  statusCode: number;
};

type VerficationAttributes = {
  id: string;
  [key: string]: string | number;
};

type PhoneToken = {
  token: string;
};

type LoginAttributes = {
  userName: string;
  password: string;
};

type LoggedInUser = {
  accessToken: string;
  role: string;
  profilePicture: string;
  name: string;
  id: string;
};

type forgetPasswordAttributes = {
  userName: string;
  to: string;
};
type resetPasswordAttributes = {
  verificationToken: string;
  newPassword: string;
  confirmPassword: string;
};

type updateStudentAttributes = {
  name: string;
  updateEmail: string;
  updatedPhone: string;
};

type ConfirmStudentAttributes = {
  phoneToken: string;
  emailToken: string;
};
type UpdatePasswordAttributes = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};

type UpdateStudentAttributes = {
  name: string;
  updatedEmail: string;
  updatedPhone: string;
};
