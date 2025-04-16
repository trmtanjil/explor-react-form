import React, { useState } from 'react';

const ControlFeild = () => {

    const [password, setpassword]= useState('')
    const [error, setError] =useState('')


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('submited');

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="password" name="password"  placeholder='Password'  /> <br />
                <input type="password" name="email"  placeholder='Password' onChange={handlePasswordChange} defaultValue={password} /> <br />
                <input type="submit" value='Submit' />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ControlFeild;