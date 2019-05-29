function logger(a,b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}

var number = 12, msg = "Hello Lars";

//logger(a, b);

function loggerV2(a:number,b:string) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`);
}

//loggerV2(number,msg);

interface IPerson {name: string};
interface IAddress {street: string};

function loggerV3(person:IPerson,address:IAddress) {
    console.log(`Person name: ${person.name}, Street name: ${address.street}`);
}

const p1 = {name: "Oliver Løye"};
const a1 = {street: "Pilevænget 5"};

//loggerV3(p1,a1);

class Person implements IPerson {
    public name;
    constructor(name:string) {
        this.name = name;
    }
}

class Address implements IAddress {
    public street;
    constructor(street:string) {
        this.street = street;
    }
}

//loggerV3( new Person("Uliver"), new Address("Lolavej"));

function loggerV4<T,U>(p:T, a:U) {
    console.log(`Person: ${p}, Street: ${a}`);
}

//loggerV4(p1.name, a1.street);

class GenericLogger<T,U> {
    log = (a:T, b:U) => console.log("Val 1: " + a, "Val 2: " + b);
}

const personLogger = new GenericLogger<IPerson,IAddress>();
const l2 = new GenericLogger<number, string>();
personLogger.log(new Person("Ulla").name, new Address("Honeybun").street);
l2.log(1, "Hello");