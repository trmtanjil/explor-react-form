import React from 'react';

const FormAction = () => {
    const handleAction =(formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <form action={handleAction}>
                <input type="text " name='name' placeholder='Name' required /> <br />
                <input type="email " name='email' placeholder='Email' required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;