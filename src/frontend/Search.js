import { debounce } from "debounce";
import React, {  useState } from "react";

function Search({ search }) {

const [query,setQuery] = useState("")

const[dataValue,setDataValue] = useState(search)

  const searchData = (query,dataValue) =>{
    if(!query){
      return dataValue;
    }
    else{
    return  dataValue?.filter((data)=>data.body.match(query.toLowerCase()))
    }
  }
 
const filterData = searchData(query,dataValue);

const handleChange = (e)=>setQuery(e.target.value)

// const handleChange = (e) => {
//   e.preventDefault();
//   const { name, value } = e.target;
//   setQuery({ ...query, [name]: value });
// };

const debounceOnChange = debounce(handleChange,500)

  return (
    <div>
      <form className="mt-5">
        <input type="text" className="form-control" name="name" onChange={debounceOnChange}/>
      </form>
      {
 
 filterData && filterData.map((item) => {
    return (
      <p id={item.id} key={item.id} className="detail-page">
        {item.body}
      </p>
      );
  })
}
    </div>
  );
}

export default Search;
