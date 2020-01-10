let car = {
  model: "Mitsubishi", // separate all attribs by a (,)
  make: "Lancer",
  carColor: function() {
    //noticefunction name : function ()
    console.log("Red");
  } // No (,) after the very last key:value pair or attribute or function
}; // must end creating an object like creating a variable

car.carColor(); // when calling an object method you type Object.Method();

const circle = {
  // key:value pairs
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("Draw");
  }
};

circle.draw();

// in order to create multiple car or circle objects we dont wanna keep copying and making so we use a constructor or factory fn
// one way to create an object is a FACTORY FUNCTION OR METHOD

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("DDDDraw");
    }
  };
}

const circle2 = createCircle(1);
circle2.draw();

//constructor function notice unlike classes in java
function Circle(radius) {
  this.radius = radius;
  console.log("this refers to this object called ", this);
  this.draw = function() {
    console.log("DOUBLE DRAW");
  };
}

const another1 = new Circle(2);
another1.draw();
// if you run (this) alone, it refers to global object which is Window object in here, and in node.js its global.
console.log("this outside of an object refers to global object=", this);
//never mess with global objects
// use the (New) keyword to create a current object.
//c# and java use constructors. SOme devs might use fatory functions
// if you forget to say = new circle (); all this keywords will change global object : this is an error.
//Javascript has an Object internal constructor that it uses when you make arrays and other objects.
// in JS functions are objects !! type Circle.  and see the attribs and methods
//in console, type Circle.name remember Circle is a fn see above.
let x = { value: 10 };
let y = x;
x.value = 20;
console.log(x.value);
console.log(y.value);
// result will be both 20 for x and y , because unlike primitives objects retain their value they are stores not in a variable.
let x1 = 10;
let y1 = x1;
x1 = 20;
console.log(x1);
console.log(y1);
//result will be x1= 20, since it changed value, but y1 will be 10. we are dealing with primitives not Objs
// Bottom line : when refering to an obj you are pointing to its address, referencing it, all changes are immediate,
// when using a primitive it has its own value and isnt referenced.
