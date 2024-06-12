/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

import { Subjects } from './subjects/Teacher';
import { Cpp, Java, React } from './subjects';

export const cpp: Subjects.Cpp = new Cpp();
export const java: Subjects.Java = new Java();
export const react: Subjects.React = new React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Mina",
  lastName: "Nady",
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());