import React, { useState } from 'react';

const ControlFeild = () => {

    const [password, setpassword]= useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('submited');

    }
    const handlePasswordChange= e =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="password" name="password"  placeholder='Password'  /> <br />
                <input type="email" name="email"  placeholder='Password' onChange={handlePasswordChange} defaultValue={password} /> <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default ControlFeild;