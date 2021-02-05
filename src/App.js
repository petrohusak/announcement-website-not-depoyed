import './App.css';
import React, { useState } from 'react'
import AnnouncementList from './AnnouncementList'
import AddAnnouncement from './AddAnnouncement'
import Search from './Search'

function App() {
  let [storingVariablesWhenSearching, setStoringVariablesWhenSearching] = useState([]); 
  let [announcements, setAnnouncements] = useState([
    {id: 1, title:'first title', description:'first description', date:'10.12.2019', visibility: false, similar:[]},
    {id: 2, title:'second title', description:'another description', date:'15.1.2020', visibility: false, similar:[]},
    {id: 3, title:'first', description:'some words', date:'1.5.2021', visibility: false, similar:[]},
  ]);

  function editAnnouncement(id) {
    let newTitle = prompt('Enter new title', 'new title');
    let newDescription = prompt('Enter new description', 'new description');
    let newDate = '' + new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
    setAnnouncements(
      announcements.map(announcement => {
        if(announcement.id === id){
          announcement.title = newTitle;
          announcement.description = newDescription;
          announcement.date = newDate;
        }
        return announcement;
      })
    )
  }

  function deleteAnnouncement(id) {
    setAnnouncements(
      announcements.filter(announcement => announcement.id !== id)
    )
  }
  
  function createAnnouncement(title, description){
    setAnnouncements(
      [{
          id: Date.now(),
          title,
          description,
          date: '' + new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear(),
          visibility: false,
          similar: [] 
        }
      ].concat(announcements)    
    )
  }

  function switchSearch(searchQuery){
    if(searchQuery === false){
      setAnnouncements(announcements = [...storingVariablesWhenSearching])
    } else {
      setStoringVariablesWhenSearching(storingVariablesWhenSearching =[...announcements])
      setAnnouncements(announcements.filter(announcement => announcement.title === searchQuery))
    }
  }
   
  function changeVisibilityOfElements(id){
    setAnnouncements(
      announcements.map(announcement=>{
        if(announcement.id === id){
          announcement.visibility = !announcement.visibility;
        }
        return announcement;
      })
    )

    let bufferTitle;
    let bufferDescription;
    let temporaryId;
    setAnnouncements(
      announcements.map(announcement=>{
        bufferTitle = announcement.title.split(' ');
        bufferDescription = announcement.description.split(' ');
        temporaryId = announcement.id;
        for(let i=0; i < bufferTitle.length; i++){
          console.log(`buffer${i}= `, bufferTitle[i])
        }
        announcements.map(item=>{          
          for(let i=0; i < bufferDescription.length; i++){
            if(temporaryId!==item.id && item.title.includes(bufferTitle[i])){
              if(item.description.includes(bufferDescription[i]))
              announcement.similar[i] = item.title + ': ' + item.description;
            }
          }
          return announcement;
        })
        return announcement;
      })
    )
  }

  return (
    <div>
      <div className='siteTitle'>
        <h1>Announcement Website</h1>
      </div>
      
      <div className="App">
        <AddAnnouncement 
        onCreate={createAnnouncement}
        />

        <Search 
        onCreate={switchSearch}
        />

        <AnnouncementList 
        announcements={announcements}
        changeAnnouncement={editAnnouncement}
        removeAnnouncement={deleteAnnouncement}
        changeVisibility={changeVisibilityOfElements}
        />
      </div>
    </div>
  )
}

export default App;
