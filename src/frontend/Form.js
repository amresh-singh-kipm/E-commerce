import React, { useState } from 'react'

function Form({name,formHeaderClass}) {
const[formState,setFormState] = useState(name)
console.log('class is',name)

  return (
    <div>
        <form className={formHeaderClass}>
            {formState&& formState.map((item,index)=>{
                return(
                    <div className={item.className.lableClass} key={index}>
                        <label>{item.name}</label>
                        <input name={item.name} type={item.type} className={item.className.inputClass}/>
                    </div>
                )
            })}
          
        </form>
    </div>
  )
}

export default Form