function Vehicle(name,description,type,costperkm){
	this.name = "Indica";
    this.description = "Fastest Car";
    this.type = "4 wheeler";
    this.costperkm = "10";
}
var vehicleOb = new Vehicle("Indica","Fastest Car","4 wheeler", "10");

function Two_wheeler(){
}
Two_wheeler.prototype = vehicleOb;
Two_wheeler.prototype.type = "CNG";
Two_wheeler.prototype.constructor = Two_wheeler;


Two_wheeler.prototype.type = function(){
	alert("Type "+this.type);
}
var humanOb = new Two_wheeler();
function Programmer(name,sleepHours){
	this.name = name;
	this.sleepHours = sleepHours;
}
Programmer.prototype =  humanOb;
Programmer.prototype.sayName = function(){
	alert(this.name);
}
Programmer.prototype.constructor = Programmer;
var programmerOb = new Programmer("smith",10);
console.log(programmerOb);

programmerOb.type();

