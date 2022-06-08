
class LearningPaths {
    constructor(
        name,
        courses = []
    ) {
        this.name = name,
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths('Escuela de desarrollo', ['Curso de CSS', 'Curso de HTML']);
const escuelaData = new LearningPaths('Escuela de Data science', ['Curso de Data driven', 'Curso de Análisis de datos']);
const escuelaVideoJuegos = new LearningPaths('Escuela de videojuegos', ['Curso de Unreal', 'Curso de Unity']);


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juandc@gmail.com',
    instagram: 'user/juan',
    learningPaths: escuelaWeb
})

const miguel2 = new Student({
    name: 'Miguel',
    username: 'miguel333',
    email: 'miguel333@gmail.com',
    instagram: 'user/miguel333',
    learningPaths: [escuelaVideoJuegos, escuelaData]
})