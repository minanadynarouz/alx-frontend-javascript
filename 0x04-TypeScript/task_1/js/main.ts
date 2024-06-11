interface Teacher {
  firstName: string,
  readonly fullTimeEmployee: boolean,
  lastName: string,
  readonly location: string,
  yearsOfExperience?: number,
  contract: boolean,
  [key: string]: any;
}

// Define the Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};