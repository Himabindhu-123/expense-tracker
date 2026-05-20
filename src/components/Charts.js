import React from "react";

import {

Pie

}

from "react-chartjs-2";

import {

Chart as ChartJS,

ArcElement,

Tooltip,

Legend

}

from "chart.js";


ChartJS.register(

ArcElement,

Tooltip,

Legend

);


function Charts({

income,

expense

}){


const data={

labels:[

"Income",

"Expense"

],

datasets:[{

data:[

income,

expense

],

backgroundColor:[

"#16a34a",

"#dc2626"

]

}]

};


return(

<div className="mt-8">

<h2 className="text-2xl font-bold mb-4">

Analytics

</h2>


<Pie

data={data}

/>

</div>

);

}


export default Charts;