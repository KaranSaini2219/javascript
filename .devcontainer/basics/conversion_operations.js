let score="3abc"
console.log(typeof score)
let value_in_number=Number(score)
console.log(typeof (value_in_number))//how can 3abc be converted to number still it did lets see the value in value_in_number
console.log(value_in_number)//NaN it means not a number
let value=null
value=Number(value)
console.log(typeof value)
console.log(value)//conversion converted the null value to zero on using the Number command

let value2=undefined
value2=Number(value2)
console.log(typeof value2)
console.log(value2)//Number command tried to convert the unefined to number but turned out to be a NaN which is not a number


//similarly we have Boolean command and String command

