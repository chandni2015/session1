function Car(model, year) {
    this.model = model;
    this.year = year;
    this.sayName = function () {
        alert(this.model);
    }
}

//creating object of type Hero
var obOne = new Car("Innova", "2015");
var obTwo = new Car("Indica", "2014");
//calling the sayName function for obOne object
obOne.sayName();
//calling the sayName function for obTwo object
obTwo.sayName();