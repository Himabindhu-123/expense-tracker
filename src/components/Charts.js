import React from "react";

import {

Pie,

Bar

}

from

"react-chartjs-2";

import {

Chart as ChartJS,

ArcElement,

Tooltip,

Legend,

CategoryScale,

LinearScale,

BarElement

}

from "chart.js";


ChartJS.register(

ArcElement,

Tooltip,

Legend,

CategoryScale,

LinearScale,

BarElement

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

const barData={

labels:[

"Income",

"Expense"

],


datasets:[{

label:

"Amount",


data:[

income,

expense

]

}]

};


return(

<div className="flex flex-col items-center gap-12">


<div className="w-[320px]"></div>



<h2 className="text-2xl font-bold mb-4">

Analytics

</h2>



<Pie

data={data}

/>

<div className="w-[350px]">

<Bar

data={{

labels:[

"Income",

"Expense"

],

datasets:[

{

label:"Amount",

data:[

income,

expense

],

backgroundColor:[

"#22c55e",   // green

"#ef4444"    // red

],

borderRadius:

8

}

]

}}

options={{

responsive:true,

plugins:{

legend:{

display:false

}

},

scales:{

y:{

beginAtZero:true

}

}

}}

/>

</div>

</div>

);

}


export default Charts;