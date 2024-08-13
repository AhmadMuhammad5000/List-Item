import { useState } from "react";

function ListItems() {
    const countries = ['America','Canada','Nigeria','Saudiya','England'];
    const [selected, setSelected] = useState(0);

    return(
        <>
         <ul className="list-group p-3 rounded w-50">
             {
                 countries.map((item,index) =>(
                     <li key={index} className={selected === index ?
                         'list-group-item active' : 'list-group-item'} onClick={()=>setSelected(index)}>{item}</li>
                 ))
             }
         </ul>
        </>
    )
}

export default ListItems