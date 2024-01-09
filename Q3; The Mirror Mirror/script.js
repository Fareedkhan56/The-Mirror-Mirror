// Q3; The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let array = ["John", "Flips", "Hazlewood", "Bryan"];
let resultArray = [];

function MirrorStr() {
    for (const iterator of array) {
        
        resultArray.push(iterator.split('').reverse().join(''))
    }
    console.log(array)
    console.log(resultArray)
}
MirrorStr()


