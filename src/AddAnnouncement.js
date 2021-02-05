import React, { useState } from 'react'

export default function AddAnnouncement({onCreate}){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    function submitHandler(event){
        event.preventDefault();

        if(title.trim() && description.trim()){
            onCreate(title, description);
            setTitle('');
            setDescription('');
        }
    }
    
    return (
        <form onSubmit={submitHandler}>
            Title:<br/>
            <input className='titleInput' value={title} onChange={event => setTitle(event.target.value)}/><br/>
            Description: <br/>
            <textarea className='descriptionInput' value={description} onChange={event => setDescription(event.target.value)}/><br/>
            <button className='addButton'>Add announcement</button>
        </form>
    )
}