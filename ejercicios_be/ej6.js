//Crear una función que reciba un array con objetos representando evaluaciones, y devuelva un array con el promedio de cada alumno.

'use strict';

function Test(id, grade) {
  this.id = id;
  this.grade = grade;
}

function Alu(id) {
  (this.id = id), (this.grades = []);
}

Alu.prototype.average = function () {
  let a = this.grades.reduce(
    (acummulator, currentValue) => acummulator + currentValue,
    0
  );
  return Math.floor(a / this.grades.length);
};

function addAlu(id, grade, ar) {
  const alu = new Test(id, grade);
  ar.push(alu);
}

const array = [];

addAlu(51278, 8, array);
addAlu(49678, 7, array);
addAlu(51278, 6, array);
addAlu(52403, 8, array);
addAlu(51278, 4, array);
addAlu(52403, 10, array);

const averages = Promedio(array);

showAverages(averages);

function Promedio(tests) {
  const students = [];
  let alu = new Alu(tests[0].id);
  alu.grades.push(tests[0].grade);
  students.push(alu);
  for (let i = 1; i < tests.length; i++) {
    let j = students.findIndex((element) => element.id === tests[i].id);
    if (j === -1) {
      alu = new Alu(tests[i].id);
      alu.grades.push(tests[i].grade);
      students.push(alu);
    } else {
      students[j].grades.push(tests[i].grade);
    }
  }
  return students;
}

function showAverages(ar) {
  for (let i = 0; i < ar.length; i++) {
    console.log(
      `Student number ${i + 1} with ID ${ar[i].id} has an average of ${ar[
        i
      ].average()}\n`
    );
  }
}
