const mySym=Symbol("key1")
const jsuser={//keys are like strings
    name:"karan", //these are like key value pairs 
    age:20,
    isLoggedIn:false,
    "loca tion":"pathankot",
    [mySym]:"myKey1"


}
console.log(jsuser["name"])//do remember this is the actual method to acces the values not the dot method
//but do remember in this method we use keys as strings

//other method
console.log(jsuser.name)//both methods work till now but now see
//console.log(jsuser.loca tion)//this will not work now
console.log(jsuser["loca tion"])//correct method
console.log(mySym)
console.log(jsuser[mySym])


//updating the values and freezing them
jsuser.age=21
//Object.freeze(jsuser)
jsuser.age=20
console.log(jsuser)
//after freezing changes will not be considered
jsuser.greeting=function()
{
    console.log("hello js user")
}
jsuser.greeting2=function()
{
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())