import React from 'react';

const SipmleForm = () => {

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        console.log('submit name: ' ,e.target.name.value);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name' placeholder='Enter your name' /> <br/>
                <input type='submit' value="Submit"/>
            </form>
        </div>
    );
};

export default SipmleForm;