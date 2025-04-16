import React, { useRef } from 'react';

const Uncontroll = () => {

    const naimRef = useRef('')
    const emailRef = useRef('')

 const   handleSubmit =(e)=>{
    e.preventDefault()
    console.log(naimRef.current.value);
    const name = naimRef.current.value;
    const email = emailRef.current.value;
    console.log(name,email);


    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name="email" id="" /><br />
                <input type="text" ref={naimRef} name="name" id="" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Uncontroll;