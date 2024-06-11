interface Teacher {
  firstName: string,
  readonly fullTimeEmployee: boolean,
  lastName: string,
  readonly location: string,
  yearsOfExperience?: number,
  contract: boolean,
  [key: string]: any;
}