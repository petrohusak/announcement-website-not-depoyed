import React, { useState } from 'react'

export default function AddAnnouncement({onCreate}){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    function submitHandler(event){
        event.preventDefault();

        if(title.trim() && description.trim()){
            onCreate(title, description);
        }
    }
    
    return (
        <form onSubmit={submitHandler}>
            Title:<br/>
            <input value={title} onChange={event => setTitle(event.target.value)}/><br/>
            Description: <br/>
            <input value={description} onChange={event => setDescription(event.target.value)}/><br/>
            <button >Add announcement</button>
        </form>
    )
}