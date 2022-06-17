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
        this._name = name;
        this._email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.toLowerCase().includes('puto')) {
            console.error('oye ti@, no hables así');
        } else {
            this._name = newName;
        }
    }

    get email() {
        console.log('venga... te doy el email');
        return this._email;
    }

    set email(newEmail) {
        // se podria aplicar un regex para validarlo
        const isCorrectEmail = true;
        if (isCorrectEmail) {
            console.log('es un email valido');
            this._email = newEmail;
        }
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        });
        comment.setComment();
    }
}


class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    setCourse(newCourse) {
        if (!!newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('lo sentimos ' + this.name + ' solo puedes consumir cursos gratuitos')
        }
    }

}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    setCourse(newCourse) {
        if (newCourse.lang !== "en") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('lo sentimos ' + this.name + ' no puedes tomar cursos en inglés')
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    setCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props);
    }

    setCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.setComment();
    }

}


class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "es"
    }) {
        this._name = name,
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === "Curso Malito de Programación Básica") {
            console.error('humm no...')
        } else {
            newName = newName.toUpperCase();
            this._name = newName
        }
    }
}

class LearningPaths {
    constructor({
        name,
        courses = []
    }) {
        this._name = name,
        this.courses = courses;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName.toString().toLowerCase();
    }
}

class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante'
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    setComment(){
        console.log(this.studentName + " (" + this.studentRole + ") - " + this.likes + ' likes')
        console.log("comentario: " + this.content)
    }
}



const cursoProgBasica = new Course({
    name: "Curso de Programación Básicas",
    isFree: true
});

const cursoDenitivoHtml = new Course({
    name: 'Curso de HTML',
    lang: 'en'
});

const cursoCSS = new Course({
    name: 'Curso de CSS'
});

const escuelaWeb = new LearningPaths({
    name: 'Escuela de desarrollo',
    courses: [cursoProgBasica, cursoDenitivoHtml, cursoCSS]
});

const escuelaData = new LearningPaths({
    name: 'Escuela de Data science',
    courses: [cursoProgBasica]
});

const escuelaVideoJuegos = new LearningPaths({
    name: 'Escuela de videojuegos',
    courses: [cursoProgBasica]
});

const juan = new BasicStudent({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juandc@gmail.com',
    instagram: 'user/juan',
    learningPaths: escuelaWeb
});


const miguel = new FreeStudent({
    name: 'Miguel',
    username: 'miguel333',
    email: 'miguel333@gmail.com',
    instagram: 'user/miguel333',
    learningPaths: [escuelaVideoJuegos, escuelaData]
});


const toni = new ExpertStudent({
    name: 'Toni',
    username: 'Toni666',
    email: 'toni@gmail.com',
    instagram: 'user/toni666',
    learningPaths: [escuelaVideoJuegos, escuelaWeb]
})

const freddy = new TeacherStudent({
    name: 'Freddy',
    username: 'FreddyAdmin',
    email: 'freddy@admin.com',
    instagram: 'user/freddyAdmin',
    learningPaths: [escuelaWeb]
})