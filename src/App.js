import React,{useState,useEffect}

from "react";

import {

onAuthStateChanged

}

from "firebase/auth";

import {

auth

}

from "./firebase/firebase";

import Login from "./components/Login";

import Dashboard from "./pages/Dashboard";


function App(){

const [

user,

setUser

]=

useState(

null

);



useEffect(()=>{

const unsubscribe=

onAuthStateChanged(

auth,

(currentUser)=>{

setUser(

currentUser

);

}

);

return()=>

unsubscribe();

},[]);



return(

<div>

{

user

?

<Dashboard/>

:

<Login/>

}

</div>

);

}


export default App;