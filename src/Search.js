import React, { useState } from 'react'

export default function Search({onCreate}){
    const [necessary, setNecessary] = useState('');

    function submitHandler(event){
        event.preventDefault();

        if(necessary.trim()){
            onCreate(necessary);
            setNecessary('');
        } else {
            onCreate(false);
        }
    }
    
    return(
        <form onSubmit={submitHandler}>
            Enter title, that you want to find:<br/>
            <input className='searchInput' value={necessary} onChange={event => setNecessary(event.target.value)}/><br/>
            <div className='searchButton'>            
                <button>Search</button><br/>  
            </div>
            <p>(Press button one more time, if you want return all announcements)</p>
        </form>
    )
}