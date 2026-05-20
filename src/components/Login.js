import React,{useState} from "react";

import {

auth

}

from "../firebase/firebase";


import {

signInWithEmailAndPassword,
createUserWithEmailAndPassword

}

from "firebase/auth";


function Login(){

const [

email,
setEmail

]=

useState("");


const [

password,
setPassword

]=

useState("");



const handleSignup=

async()=>{

try{

await createUserWithEmailAndPassword(

auth,
email,
password

);

alert(

"Signup successful"

);

}

catch(error){

alert(

error.message

);

}

};



const handleLogin=

async()=>{

try{

await signInWithEmailAndPassword(

auth,
email,
password

);

alert(

"Login successful"

);

}

catch(error){

alert(

error.message

);

}

};



return(

<div className="min-h-screen flex justify-center items-center bg-gray-100">


<div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">


<h2 className="text-3xl font-bold mb-6 text-center">

Login

</h2>


<input
type="email"
placeholder="Email"
className="w-full border p-3 rounded mb-4"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)
}
/>


<input
type="password"
placeholder="Password"
className="w-full border p-3 rounded mb-4"
value={password}
onChange={(e)=>
setPassword(
e.target.value
)
}
/>


<button
onClick={handleLogin}
className="bg-blue-600 text-white p-3 rounded w-full mb-3 hover:bg-blue-700"
>

Login

</button>



<button
onClick={handleSignup}
className="bg-green-600 text-white p-3 rounded w-full hover:bg-green-700"
>

Signup

</button>


</div>


</div>

);

}

export default Login;