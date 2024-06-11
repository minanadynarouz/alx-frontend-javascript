interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student_one: Student = {
  firstName: "Mina",
  lastName: "Nady",
  age: 34,
  location: "Cairo, EG"
};

const student_two: Student = {
  firstName: "Nardin",
  lastName: "Amgad",
  age: 30,
  location: "Cairo, EG"
};

const studentList: Array<Student> = [student_one, student_two];

const table = document.createElement("table");

studentList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.lastName;
});

document.body.appendChild(table);



