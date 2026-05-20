import React, { useState } from "react";

import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import Charts from "../components/Charts";

function Dashboard() {

const [income, setIncome] =
useState(0);

const [expense, setExpense] =
useState(0);


return (

<div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">

<h1 className="text-2xl

lg:text-4xl font-bold text-center mb-10">

💰 Expense Tracker

</h1>



<div

className=

"flex flex-col lg:flex-row gap-8 ">


<div className="bg-white p-8 rounded-3xl shadow-2xl flex-1">

<AddExpense />


<ExpenseList

setIncome={setIncome}

setExpense={setExpense}

/>

</div>



<div className="bg-white p-8 rounded-3xl shadow-2xl w-full

lg:w-[400px] h-fit">

<Charts

income={income}

expense={expense}

/>

</div>


</div>


</div>

);

}

export default Dashboard;