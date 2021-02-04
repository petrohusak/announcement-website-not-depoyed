import './App.css';
import React from 'react'
import AnnouncementList from './AnnouncementList'
import AddAnnouncement from './AddAnnouncement'

function App() {
  const [announcements, setAnnouncements] = React.useState([
    {id: 1, title:'cxv', description:'asdszfsdfad', date:'10.10.10'},
    {id: 2, title:'sdf', description:'dfgkjdnfgks', date:'10.10.10'},
    {id: 3, title:'xfg', description:'sfdgijkdfgf', date:'10.10.10'},
  ])

  function editAnnouncement(id) {
    let newTitle = prompt('Enter new title', 'new title');
    let newDescription = prompt('Enter new description', 'new description');
    let newDate = '' + new Date().getFullYear() + '.' + new Date().getMonth() + '.' + new Date().getDate();
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
          date: '' + new Date().getFullYear() + '.' + new Date().getMonth() + '.' + new Date().getDate()
        }
      ].concat(announcements)    
    )
  }

  return (
    <div className="App">
      <AddAnnouncement 
      onCreate={createAnnouncement}
      />
      
      <AnnouncementList 
      announcements={announcements}
      changeAnnouncement={editAnnouncement}
      removeAnnouncement={deleteAnnouncement}
      />
    </div>
  )
}

export default App;
