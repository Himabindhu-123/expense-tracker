import React, { useEffect, useState } from "react";
import Papa

from "papaparse";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function ExpenseList({

setIncome,

setExpense

}){

  const [data, setData] = useState([]);
  const [search,setSearch]=useState("");


  useEffect(() => {

    const fetchData = async () => {

      const querySnapshot =
        await getDocs(
          collection(
            db,
            "transactions"
          )
        );

      const list =
        querySnapshot.docs.map(
          doc => ({

            id: doc.id,

            ...doc.data()

          })
        );

      setData(list);

    };

    fetchData();

  }, []);



  const handleDelete =
    async (id) => {

      await deleteDoc(

        doc(
          db,
          "transactions",
          id
        )

      );

      window.location.reload();

    };



  const totalIncome =
    data
      .filter(
        item =>
          item.type === "Income"
      )
      .reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );



  const totalExpense =
    data
      .filter(
        item =>
          item.type === "Expense"
      )
      .reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );



  const balance =
    totalIncome -
    totalExpense;

    useEffect(()=>{

setIncome(

totalIncome

);

setExpense(

totalExpense

);

},

[

totalIncome,

totalExpense,

setIncome,

setExpense

]

);

const exportCSV = () => {

const cleanData = data.map(

(item)=>{

let formattedDate = "";

if(item.createdAt){

try{

formattedDate =
item.createdAt.toDate()
.toLocaleDateString(

"en-GB",

{

day:"2-digit",

month:"short",

year:"numeric"

}

);

}

catch{

formattedDate =

new Date(

item.createdAt.seconds * 1000

)

.toLocaleDateString();

}

}


return{

Category:

item.category || "",


Type:

item.type || "",


Amount:

item.amount || 0,


Date:

" " + formattedDate + " "

};

}

);


const csv =

Papa.unparse(

cleanData

);


const blob =

new Blob(

[csv],

{

type:

"text/csv"

}

);


const url =

URL.createObjectURL(

blob

);


const a =

document.createElement(

"a"

);


a.href = url;


a.download =

"expenses.csv";


a.click();

};

    return (

    <div>


      <div className="grid grid-cols-3 gap-4 mt-10 mb-6">


        <div className="bg-green-100 p-4 rounded-xl text-center">

          <h3 className="font-bold">

            Income

          </h3>

          <p className="text-green-600">

            ₹{totalIncome}

          </p>

        </div>



        <div className="bg-red-100 p-4 rounded-xl text-center">

          <h3 className="font-bold">

            Expense

          </h3>

          <p className="text-red-600">

            ₹{totalExpense}

          </p>

        </div>



        <div className="bg-blue-100 p-4 rounded-xl text-center">

          <h3 className="font-bold">

            Balance

          </h3>

          <p className="text-blue-600">

            ₹{balance}

          </p>

        </div>


      </div>

    <input

className="w-full border p-3 rounded-xl mb-4"

placeholder="Search category"

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>

<select

className="border p-2 rounded mb-4"

onChange={(e)=>

setSearch(

e.target.value

)

}

>

<option>

All

</option>

<option>

Food

</option>

<option>

Travel

</option>

<option>

Salary

</option>

<option>

Shopping

</option>

</select>

<button

onClick={exportCSV}

className="bg-green-500 text-white px-4 py-2 rounded"

>

Export CSV

</button>

      <h2 className="text-2xl font-bold mt-6">

        Transactions

      </h2>



      {

        data

            .filter(

            item=>

            item.category

            ?.toLowerCase()

            .includes(

            search.toLowerCase()

            )

            )

            .map(

          (item) => (

            <div

              key={item.id}

              className="bg-gray-100 rounded-xl p-4 flex justify-between mt-3 shadow"

            >


              <div>

                <p className="font-semibold">

                  {item.type}

                </p>


                <p className="text-sm text-gray-500">

                  {item.category}

                </p>

              </div>




              <div className="flex items-center gap-3">


                <span

                  className={

                    item.type === "Income"

                      ?

                      "text-green-600 font-bold"

                      :

                      "text-red-600 font-bold"

                  }

                >

                  ₹{item.amount}

                </span>




                <button

                  onClick={() =>
                    handleDelete(
                      item.id
                    )
                  }

                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"

                >

                  Delete

                </button>


              </div>



            </div>

          )

        )

      }


    </div>

  );

}

export default ExpenseList;