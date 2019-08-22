// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
            this.favLanguage = attributes.favLanguage,
            this.catchPhrase = attributes.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }

    changeGrade(student, grade) {
        return `student has a grade of ${grade + Math.random()}`;
    }

}


class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects,
            this.grade = attributes.grade
    }

    listsSubjects(favSubjects) {
        return `${favSubjects}`;

    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(grade) {
        if (grade >= 70) {
            return `You have a grade of ${grade}%. You pass!!`
        } else {
            return `You have a grade of ${grade}%. You didn't pass. Wait...I didn't see your stretch goal was met before. you graduate!!`
        }

    }

}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName,
            this.favInstructor = attributes.favInstructor
    }

    standUp(gradClassName) {
        return `${this.name} announces to ${this.gradClassName}, @channel standy times!​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }

}

/******TESTING SECTION************/


const jahari = new Person({
    name: 'Jahari',
    location: 'Los Angeles',
    age: 21
});

const kamyie = new Person({
    name: 'Kamyie',
    location: 'Santa Barbara',
    age: 18
});

console.log(jahari.speak());
console.log(kamyie.speak());




const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

console.log(fred.demo('Math'));
console.log(fred.grade('Joe', 'Javascript'));


const britt = new Instructor({
    name: 'Britt',
    location: 'Canada',
    age: 30,
    favLanguage: 'C++',
    specialty: 'Front-end',
    catchPhrase: `Code everything`
});

console.log(britt.demo('Adavanced CSS'));
console.log(britt.grade('Kevin', 'flexbox'));



const tazje = new Student({
    name: 'Tazje',
    age: 23,
    location: 'Las Vegas',
    className: 'ls1908',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 87
});

const dijon = new Student({
    name: 'DiJon',
    age: 25,
    location: 'Woodland Hills',
    className: 'ls1908',
    favSubjects: ['CSS', 'JavaScript', 'React'],
    grade: 74
});


console.log(tazje.listsSubjects('CSS, JavaScript, React'));
console.log(dijon.sprintChallenge('JavaScript-IV'));



const joe = new ProjectManager({
    name: 'Joe',
    location: 'USA',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack Web',
    catchPhrase: `Talk code to me`,
    gradClassName: 'ls1908',
    favInstructor: 'Britt'
});


const lauren = new ProjectManager({
    name: 'Lauren',
    location: 'London',
    age: 37,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `somebody make this make sense`,
    gradClassName: 'ls1909',
    favInstructor: 'Britt'
});


console.log(joe.standUp('ls1908'));
console.log(lauren.debugsCode('Tazje', 'Python Basics'));


/********STRETCH GOALS********/

console.log(tazje.graduate(87));
console.log(dijon.graduate(69));


console.log(britt.changeGrade(dijon, 69.59));