export default function getStudentIdsSum(studentList) {
  const sumOfIDs = studentList.reduce((acc, student) => acc + student.id, 0);
  return sumOfIDs;
}
