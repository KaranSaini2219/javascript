const name="karan"
const branch="cse"
console.log(`my name is ${name} and my branch is ${branch}`)


const gamename=new String("hitesh")
console.log(gamename[0])
console.log(gamename.length)
console.log(name.toUpperCase()) // conevrt the entire string to upper case
console.log(gamename.toUpperCase())

console.log(gamename.charAt(2))//tells the character at provided index
console.log(gamename.indexOf('s'))// tells the first appearance index of specified character
const newstring=gamename.substring(0,4)//gAVE ME THE SUBSTRING
console.log(newstring)

const newstring2=gamename.slice(-4,-1)//here -8 will be initial index and 0 will be final index
//eg "javascript"  str.slice(-8,-4)  =vascr
console.log(newstring2)

const spaced="   dubai   "
console.log(spaced.trim())// it removes the beginning and trailing spaces
const spaced2="i live in india  "
console.log(spaced2.trim())//it donot remove the space between words

console.log(spaced2.replace("live","want to live"))//replacement

console.log(spaced2.includes("india"))


