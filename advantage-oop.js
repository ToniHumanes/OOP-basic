

function videoPlay(id){
    const urlSecret = 'https:urlsecreta.com';
    console.log("Se esta reproducciendo desde" + urlSecret);
}

function videoStop(id){
    const urlSecret = 'https:urlsecreta.com';
    console.log("Se esta pausando desde" + urlSecret);
}

class Classes{
    constructor({
        name,
        videoId,
        time = "00:00",
    }) {
        this.name = name;
        this.videoId = this.videoId;
        this.time = time;
    }


    play(){
        videoPlay(this.videoId)
    }

    pause(){
        videoStop(this.videoId);
    }
}

class Course{
    constructor({
        name,
        classes = []
    }) {
        this._name = name,
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName === "Curso Malito de Programación Básica"){
            console.error('humm no...')
        }else{
            newName = newName.toUpperCase();
            this._name = newName
        }
    }
}

const absJs = new Classes({
    name: 'Abstración en js',
    time: '10:34'
});

const cursoProgBasica = new Course({
    name: "Curso de Programación Básicas",
    classes: [absJs]
})

const cursoDenitivoHtml = new Course({
    name: 'Curso de HTML'
})

const cursoCSS = new Course({
    name: 'Curso de CSS'
})

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

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName.toLowerCase().includes('puto')){
            console.error('oye ti@, no hables así');
        }else{
            this._name = newName;
        }
    }

    get email(){
        console.log('venga... te doy el email');
        return this._email;
    }

    set email(newEmail){
        // se podria aplicar un regex para validarlo
        const isCorrectEmail = true;
        if(isCorrectEmail){
            console.log('es un email valido');
            this._email = newEmail;
        }
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