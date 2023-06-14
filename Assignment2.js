let numbers = [0, 1, 2, 3, 4, 5];
const fruitColor = {
    apple: "red",
    banana: "yellow",
    tangerine: "orange",
};


//forEach()
function myEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

function printValues(ele) {
    console.log(ele);
}
myEach(numbers, printValues);


//map()
function myMap(arr, cb) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}

function incrementOne(ele) {
    return ele + 1;
}
console.log(myMap(numbers, incrementOne));


//filter()
function myFilter(arr, cb) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = cb(arr[i]);
    }
    return result;
}

function isEven(ele) {
    if (ele % 2 === 0) return ele;
}
console.log(myFilter(numbers, isEven));


//some() (aka any())
function mySome(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        //If the function contains one,return true and exit the function
        if (cb(arr[i])) {
            return true;
        }
    }
    return false;
}

function containsEven(ele) {
    return ele % 2 === 0;
}
console.log(mySome(numbers, containsEven));


//every()
function myEvery(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        //If one ele does not meet the condition, return false and exit the function
        if (!(cb(arr[i]))) return false;
    }
    return true;
}

function allGreaterThanZero(ele) {
    return ele > 0;
}
console.log(myEvery(numbers, allGreaterThanZero));


//reduce()
function myReduce(arr, cb) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += cb(arr[i]);
    }
    return result;
}

function sum(ele) {
    return ele;
}
console.log(myReduce(numbers, sum));


//includes()
function myIncludes(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return true;
    }
    return false;
}
console.log(myIncludes(numbers, 3));


//myiOf()
function myIndexOf(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return i;
    }
    return -1;
}
console.log(myIndexOf(numbers, 0));


//push()
function myPush(arr, ele) {
    arr[arr.length] = ele;
    //push method returns the i of the added element
    return arr.length;
}
console.log(myPush(numbers, 10));
//myEach(numbers, printValues);  //check values


//lastOf()
function myUnshift(arr, ele) {
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === ele) return i;
    }
    return -1;
}
console.log(myUnshift(numbers, 1));


//Object.keys()
function grabKeys(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}
console.log(grabKeys(fruitColor));


// Object.values()
function grabValues(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
console.log(grabValues(fruitColor));


//Miscellaneous Problems 1: Sum of a Range
let numArr = [0, 1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10];
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

function sum(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
}
console.log(range(1, 3));
console.log(sum(numArr));
console.log(sum(range(1, 10)));


//Miscellaneous Problems 2: Reversing an Array
function reverseArray(numArr) {
    let result = [];
    for (let i = numArr.length - 1; i >= 0; i--) {
        result.push(numArr[i]);
    }
    return result;
}

function reverseArrayInPlace(numArr) {
    //Descending bubble sort algorithm
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[i] > numArr[j]) {
                var temp = numArr[i];
                numArr[i] = numArr[j];
                numArr[j] = temp;
            }
        }
    }
    return numArr;
}
console.log(reverseArray(numArr));
console.log(reverseArrayInPlace(numArr));


//Miscellaneous Problems 3: A List
function arrayToList(array) {
    var list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, rest) {
    return { value: value, rest: rest };
}

function nth(list, position) {
    if (position === 0)
        return list.value;
    else
        return nth(list.rest, position - 1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//Miscellaneous Problems 4: Deep Comparison
function deepEqual(a, b) {
    if (typeof obj === "object" && obj != null) {
        keys1 = Object.keys(a);
        keys2 = Object.keys(b);

        if (keys1.length != keys2.length) return false;

        for (const key in this) {
            if (obj[key] === undefined) return false;
            else if (this[key] === obj[key]) continue;
            else return false;
        }
    }
    return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true


//Miscellaneous Problems 5: moveZeros
function moveZeros(nums) {
    let count = 0;  //The count of non zero element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return numArr;
}
console.log(moveZeros(numArr));