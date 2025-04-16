import React, { useState } from 'react';

const ControlFeild = () => {

    const [name,setname] = useState('')
    const [password, setpassword]= useState('')
    const [email, setEmail] = useState(' ')
    const [error, setError] =useState('')


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name,password,email);

        // if(password.length<6){
        //     setError('enter 6 cerecter ')
        // }
        // else{
        //     setError(' ')
        // }

    }
    const handlePasswordChange= e =>{
        console.log(e.target.value)
        setpassword(e.target.value)
        
        if(password.length<6){
            setError('enter 6 carecter  pas')
        }
        else{
            setError(' ')
        }
    }

    const handlName = e=>{
        setname(e.target.value)
        console.log(e.target.value);
    }
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text " name='name' placeholder='Name' onChange={handlName} defaultValue={name} /><br />

                <input type="email" name="email" id="" placeholder='Email' defaultValue={email} onChange={handleEmail} /><br />
                
                <input type="password" name="password"  placeholder='Password' onChange={handlePasswordChange} defaultValue={password} /> <br />

                
                <input type="submit" value='Submit' />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ControlFeild;