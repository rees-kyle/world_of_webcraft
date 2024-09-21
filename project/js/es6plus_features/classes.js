// classes; blueprints for creating objects, can include properties and methods
console.log("Classes:");

// define a class
class Person {
    // constructor method to initialize new 'Person' objects
    constructor(name, age) {
        // properties to store the person's name and age
        this.name = name;
        this.age = age;
    }

    // class method to describe the person
    describe() {
        return `${this.name} is ${this.age} years old`;
    }
}

// creating an instance of the 'Person' class
const person1 = new Person("Alice", 30);

console.log(person1.describe());


// constructor method; for creating and initializing an object created with a class, can only be one constructor method in a class


// class methods; methods inside a class that define what actions the class objects can perform


// static methods:
console.log("Static Methods:");
// - defined on the class itself and not on any instance of the class
// - can be called without instantiating the class, but cannot be called through a class instance

// class to represent a point in 2D space
class Point {
    // constructor to initialize new 'Point' instances
    constructor(x, y) {
        // coordinates of the point
        this.x = x; 
        this.y = y;
    }

    static distance(a, b) { // static method
        // difference in coordinates
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        // calculate square root of the sum of squares of dx and dy
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// create a new 'Point' instance with coordinates (5, 5)
const p1 = new Point(5, 5); 
// create another new 'Point' instance with coordinates (10, 10)
const p2 = new Point(10, 10);

// log the distance between 'p1' and 'p2' using the static method 'distance'
console.log(Point.distance(p1, p2));


// inheritance; allowing one class to inherit from another, with the 'extends' keyword

// define a 'Student' class which extends the 'Person' class to inherit its properties and methods
class Student extends Person {
    // constructor method to initialize a new instance of 'Student'
    constructor(name, age, grade) {
        super(name, age); // call the parent class (Person) constructor to initialize name and age
        this.grade = grade; // additional property for the student's grade
    }

    // override the 'describe' method to add additional details about the student
    describe() {
        // call the parent class (Person) 'describe' method and append additional student-specific information
        return `${super.describe()} and is in grade ${this.grade}.`;
    }
}

// create a new instace of 'Student'
const student1 = new Student("Bob", 12, 7);

// output the description of the student using the describe method
console.log(student1.describe());


// benefits of classes:
// - clearer and simpler syntax for creating objects and dealing with inheritance
// - better readability and organization
// - encourages encapsulation and object-oriented programming techniques

// code is more modular, maintainable and understandable