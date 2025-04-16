import React from 'react';
import UseInputFeild from '../../useInputFeild/UseInputFeild';

const HocForm = () => {

    const [name, setNameChange]= UseInputFeild('')
    const [email,setEmail] = UseInputFeild('')
    const handleSubmit = e=>{
        e.preventDefault();
        console.log('name: ',name, "email :", email);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={setNameChange} defaultValue={name} />
        <br />

            <input type="email" name="email" defaultValue={email} onChange={setEmail} id="" />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HocForm;