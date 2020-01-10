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
