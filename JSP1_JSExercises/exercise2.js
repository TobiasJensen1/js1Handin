const NAMES = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Luna", "Ann-Sofie", "Oliver"];

function myFilter(array, cb) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let val = cb(array[i], i, array);
        newArr.push(val);
    }
    console.log(newArr);
    return newArr;
}


function lessThanThreeChars(name) {
    if(name.length <= 3) {
        return name;
        
    }
}

myFilter(NAMES, lessThanThreeChars);