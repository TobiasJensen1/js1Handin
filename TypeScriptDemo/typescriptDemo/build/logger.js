function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var number = 12, msg = "Hello Lars";
//logger(a, b);
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
;
;
function loggerV3(person, address) {
    console.log("Person name: " + person.name + ", Street name: " + address.street);
}
var p1 = { name: "Oliver Løye" };
var a1 = { street: "Pilevænget 5" };
//loggerV3(p1,a1);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
//loggerV3( new Person("Uliver"), new Address("Lolavej"));
function loggerV4(p, a) {
    console.log("Person: " + p + ", Street: " + a);
}
//loggerV4(p1.name, a1.street);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Val 1: " + a, "Val 2: " + b); };
    }
    return GenericLogger;
}());
var personLogger = new GenericLogger();
var l2 = new GenericLogger();
personLogger.log(new Person("Ulla").name, new Address("Honeybun").street);
l2.log(1, "Hello");
//# sourceMappingURL=logger.js.map