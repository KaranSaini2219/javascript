//console.log("hello")
const tinderuser={}
tinderuser.name="karan"
tinderuser.email="saini@gmail.com"
//console.log(tinderuser)
//const tinderuser1= new Object()
//
////nested objects
//const regularuser={
//    email:"karansaini@gmail.com",
//    fullname:{
//        userfullname:{
//            firstname:"karan",
//            lastname:"saini"
//
//        }
//    }
//
//}
//console.log(regularuser.fullname.userfullname.firstname)
//
////merge objects
//const obj1={1:"A",2:"b"}
//const obj2={3:"d",2:"f"}
////const obj3={obj1,obj2}//didnt work fine
////console.log(obj3)
//const obj4=Object.assign({},obj1,obj2)//this worked but important point the key 2 printed only once with value defined later that is f
//console.log(obj4)
//
////best method to merge just like arrays is spread method drop the glass
//const obj5={...obj1,...obj2}
//console.log(obj5)
//

const user=[
    {
        id:1,
        email:"karan@gmail.com"
    },
    {
        id:1,
        email:"saini@gmail.com"
    },
    {
        id1:1,
        email:"hi@gmail.com"
    }
]
//console.log(user[1].email)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))

