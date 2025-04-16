import React, { useState } from 'react';

const UseInputFeild = (defaultValue) => {

    const [feildValue, setfeildValue] = useState(defaultValue)

    const handleFeildOnChange =e=>{
        setfeildValue(e.target.value);
    }
    return  [feildValue,handleFeildOnChange]
};

export default UseInputFeild;