// objeto literal
const natalia = {
    name: 'Natalia',
    age: 20,
    approvedCourses: [
        "Curso definitivo de HTML Y CSS",
        "Curso práctico de HTML Y CSS"
    ],
    aprobarCurso(newCourse) {
        this.approvedCourses.push(newCourse);
    },

};

// hacer que natalia aprtuebe otro curso
// natalia.approvedCourses.push('Curso básico de POO en JS');

function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    // this.aprobarCurso = function(newCourse){
    //     this.approvedCourses.push(newCourse);
    // }

}

Student.prototype.aprobarCurso = function (newCourse) {
    this.approvedCourses.push(newCourse);
}

const juanita = new Student('Juanita', 19, ['Curso de CSS']);
juanita.aprobarCurso('Nuevo curso de SCSS con preprocesadores');


// Prototipos con la sintaxis de clases

class Student2 {

    constructor({email, name, age, approvedCourses}){
        this.name = name;
        this.age = age;
        this.email = email;
        this.approvedCourses = !!approvedCourses ? approvedCourses : [];
    }

    aprobarCurso(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

const miguelito = new Student2(
    {
        name: 'Miguel', 
        age: 28, 
        approvedCourses: ['Curso de analisis de negocio', 'Principios de visualización de datos'],
        email: "miguelito@gmail.com"
    }
);

miguelito.aprobarCurso('Nuevo curso de Phyton');

