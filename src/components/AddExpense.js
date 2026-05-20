import React, { useState } from "react";

import { db } from "../firebase/firebase";

import {
 collection,
 addDoc
}
from "firebase/firestore";


function AddExpense(){

 const [amount,setAmount]=useState("");

 const [type,setType]=useState("Expense");

const [category, setCategory] = useState("");

 const handleSubmit=async()=>{

   if(!amount){

    alert("Enter amount");

    return;

   }

   await addDoc(

collection(db,"transactions"),

{

amount:Number(amount),

type:type,

category:category,

createdAt:new Date()

}

);

   alert("Saved!");

   setAmount("");

 };


 return(

<div>

<h2>Add Transaction</h2>

<input

className="w-full p-3 border rounded-xl mb-4"

type="number"

placeholder="Enter amount"

value={amount}

onChange={(e)=>

setAmount(e.target.value)

}

/>


<select

className="w-full p-3 border rounded-xl mb-4"

value={type}

onChange={(e)=>

setType(e.target.value)

}

>

<option>

Income

</option>

<option>

Expense

</option>

</select>

<input

className="w-full p-3 border rounded-xl mb-4"

placeholder="Category"

value={category}

onChange={(e)=>

setCategory(e.target.value)

}

/>


<button

className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl"

onClick={handleSubmit}

>

Add Transaction

</button>

</div>

 )

}


export default AddExpense;