export default function getStudentsByLocation(studentList, city) {
  const filteredList = studentList.filter((student) => student.location === city);
  return filteredList;
}
