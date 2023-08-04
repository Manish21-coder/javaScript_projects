const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(
        function () {
            console.log("first promise workedout");
            resolve();
        }
        , 1000);
});

promiseOne.then(function () {
    console.log(" promise consumed");
});


new Promise(function (resolve, reject) {

    setTimeout(
        function () {
            resolve({ username: "manish", password: "1323" });
        }

        , 1000);
}).then(function(user){
    console.log(user);
    console.log(user.username);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;

        if(!error){
            resolve({username:"kumar raghav", email:'raghavmanishprakash@gmail.com'})
        }else{
            reject("some went wrong");
        }
    },1000);
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((data)=>{
  console.log(data);
}).catch(function(){
    console.log("eror has been catched");
})


const prmiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;

        if(!error){
            resolve({username:"kumar raghav", email:'raghavmanishprakash@gmail.com'})
        }else{
            reject("error: js went wrong");
        }
    },1000);
})

// we are going to use async and wait

async function consuePromiseFive(){
    
    try {
        const respose = await prmiseFive;
    console.log(respose);
    } catch (error) {
        console.log(error);
    }
}

consuePromiseFive()


//  now how will be used the async an await function 

// async function getUser(){

   

//      try{
//         const user = await fetch('https://api.github.com/users/Manish21-coder');
//         const data  = await user.json();
//         console.log(data);
//      }catch(error){
//       console.log("error",error);
//      }
// }

// getUser();


// now by using the then catch final

fetch('https://api.github.com/users/Manish21-coder').then((response)=>{
   return response.json();
}).then((data)=>{
console.log(data);
}).catch(()=>{
    console.log("something is not write ");
}).finally(()=>{
    console.log("either resolved or rejected");
})