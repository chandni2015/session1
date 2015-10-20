var extend = function (studentConstructor, personConstructor) {
    function tempConstructor() {};
    tempConstructor.prototype = personConstructor.prototype;
    studentConstructor.superClass_ = personConstructor.prototype;
    studentConstructor.prototype = new tempConstructor();
    studentConstructor.prototype.constructor = studentConstructor;
};
var Person = function () {

}
Person.prototype = {
    alertMsg: function (msg) {
        alert(msg);
    }
}
Person.prototype.foo = 'Bar';
var Student = function () {

}
extend(Student, Person);
var studentOb = new Student();
studentOb.alertMsg("Hi..i m Student object");