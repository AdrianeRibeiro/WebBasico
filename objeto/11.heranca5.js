console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Toda função tem um prototype
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log("Adriane".reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())