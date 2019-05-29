let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Luna", "Ann-Sofie", "Oliver"];
//console.log(names);

//Filter method:

function lessThanThreeChars(name) {
    if(name.length <= 3) {
        return name;
        
    }
}

function myFilterFunction() {
    var filteredArray = names.filter(lessThanThreeChars);
    console.log("Filter: " + filteredArray);
}

myFilterFunction();

//Map method:

function myToUppercase(name) {
    return name.toUpperCase();
}

function myMapFunction() {
    var mapArray = names.map(myToUppercase);
    console.log("Map: " + mapArray);
}

myMapFunction();
