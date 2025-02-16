//function add(num1,num2)
//{
//    return num1+num2
//}
//const result=add(3,5)
//console.log("result: ",result)


//to have n number of parameter
//function shoppingcart(...num)
//{
//    return num
//}
//console.log(shoppingcart(5,3,2,66,77,4566,4))
//
//function shoppingcart2(val1,val2,...num)
//{
//    return num
//}
//console.log(shoppingcart2(12,123,12345,1344566,6546,664))//here val1 took 12 and val2 took 123 and then started returnning of num
//
////objects in function parameter
//const user={
//    username:"karan",
//    age:12
//}
//function printfunction(anyobject)
//{
//    console.log(`username is ${anyobject.username} and th eage is ${anyobject.age}`)
//}
//printfunction(user)
// 

//passing the array in the object
const myarray=[1,2,3,4,5]
function myarrayfunction(anyarray)
{
    return anyarray[1]
}
console.log(myarrayfunction(myarray))